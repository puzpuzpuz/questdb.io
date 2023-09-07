import React, { useMemo, useState } from "react"
import { formatPrice } from "../../../utils"
import type { Region, RegionKey } from "./prices"
import { cpuPrices, storagePrices, regions } from "./prices"
import { Dropdown } from "../../../components/Dropdown"
import { Section } from "../../../components/Section"
import { Slider } from "../../../components/Slider"
import style from "./style.module.css"
import { ProviderSelect } from "./provider-select"
import { bytesWithSuffix } from "../../../utils/bytes-with-suffix"
import { Toggle } from "../../../components/Toggle"
import { Link } from "@docusaurus/router"
import clsx from "clsx"
import { GetAccess } from "../../../modules/cloud/get-access"
import Button from "@theme/Button"
import { toPlausibleClassname } from "../../../utils/plausible"

type RegionSelectProps = {
  value: RegionKey
  onChange: (value: RegionKey) => void
  regions: readonly Region[]
}

const RegionSelect = ({ value, onChange, regions }: RegionSelectProps) => (
  <Dropdown<RegionKey>
    value={value}
    onChange={onChange}
    values={regions.map(({ key, label, available }) => ({
      label: available
        ? `${label} (${key})`
        : `${label} (${key}) (Coming soon)`,
      value: key,
      disabled: !available,
    }))}
  />
)

enum Rate {
  hour = "hour",
  month = "month",
}

export const PlanCalculator = () => {
  const [region, setRegion] = useState<RegionKey>("us-east-2")
  const [cpuSliderIndex, setCPUSliderIndex] = useState(0)
  const [storageSliderIndex, setStorageSliderIndex] = useState(0)
  const [rate, setRate] = useState<Rate>(Rate.hour)
  const plan = useMemo(
    () => ({
      cpu: cpuPrices.filter((plan) => plan.region === region),
      storage: storagePrices.filter((plan) => plan.region === region),
    }),
    [region],
  )

  const selectedCPU = plan.cpu[cpuSliderIndex]
  const selectedStorage = plan.storage[storageSliderIndex]
  const equivalentStorage = bytesWithSuffix(selectedStorage.storage * 5, 3)
  const priceMultiplier = rate === Rate.hour ? 1 : 730
  const priceFormattingOptions: Intl.NumberFormatOptions =
    rate === Rate.hour
      ? { minimumFractionDigits: 3 }
      : { maximumFractionDigits: 0 }

  return (
    <>
      <Section.Title size="small" center className={style.title}>
        Explore QuestDB Cloud pricing options
      </Section.Title>

      <article className={style.card}>
        <ProviderSelect
          selectedProvider="aws"
          className={style.providerSelect}
        />

        <div className={clsx(style.labelledInput, style.regionsSelect)}>
          Region
          <RegionSelect value={region} onChange={setRegion} regions={regions} />
        </div>

        <div className={style.sliders}>
          <div className={style.labelledInput}>
            Instance
            <Slider
              value={cpuSliderIndex}
              onChange={(value) => setCPUSliderIndex(value)}
              label={(index: number) => {
                const { cores, ram } = plan.cpu[index]
                const { value, suffix: ramSuffix } = bytesWithSuffix(ram, 3)
                return `${cores} cores (${value} ${ramSuffix} RAM)`
              }}
              max={plan.cpu.length - 1}
            />
          </div>

          <div className={style.labelledInput}>
            Storage
            <Slider
              value={storageSliderIndex}
              onChange={(value) => setStorageSliderIndex(value)}
              label={(value: number) => {
                const formatted = bytesWithSuffix(
                  plan.storage[value].storage,
                  3,
                )
                return `${formatted.value} ${formatted.suffix}`
              }}
              max={plan.storage.length - 1}
            />
          </div>
        </div>

        <div className={style.result}>
          {typeof selectedCPU.price === "number" &&
          typeof selectedStorage.price === "number" ? (
            <>
              <h3>
                {formatPrice(
                  (selectedCPU.price + selectedStorage.price) * priceMultiplier,
                  priceFormattingOptions,
                )}
                {rate === Rate.month && (
                  <>
                    <sup className={style.asterisk}>*</sup>
                    <span className={style.dimmed}> (est)</span>
                  </>
                )}
              </h3>
              <div className={style.toggle}>
                per
                <Toggle
                  options={[Rate.hour, Rate.month]}
                  selected={rate}
                  onClick={(value) => setRate(value)}
                />
              </div>
              {rate === Rate.month && (
                <span className={style.dimmed}>
                  * assuming continuous 24/7 runtime.
                </span>
              )}
            </>
          ) : (
            <hgroup>
              <h3>
                <Link
                  className={toPlausibleClassname(
                    "Click Secondary Calculator Contact",
                  )}
                  to="/enterprise/contact"
                >
                  Contact us
                </Link>
              </h3>
              <p>for custom pricing</p>
            </hgroup>
          )}
        </div>

        <div className={style.compressionInfo}>
          Equivalent to{" "}
          <span className={style.accent}>
            {equivalentStorage.value} {equivalentStorage.suffix}
          </span>{" "}
          of uncompressed storage
          {typeof selectedStorage.price === "number" ? (
            <>
              , saving up to{" "}
              <span className={style.accent}>
                {formatPrice(
                  selectedStorage.price * 4 * priceMultiplier,
                  priceFormattingOptions,
                )}
                /{rate}.
              </span>
            </>
          ) : (
            "."
          )}{" "}
          Need more?{" "}
          <GetAccess
            trigger={
              <Button
                className={toPlausibleClassname(
                  "Click Secondary CalcFlavour Contact",
                )}
                variant="plain"
              >
                Contact us.
              </Button>
            }
          />
        </div>
      </article>
    </>
  )
}
