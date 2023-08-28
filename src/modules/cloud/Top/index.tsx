import React from "react"
import { Section } from "../../../components/Section"
import styles from "./styles.module.css"
import { useCloudUrl } from "../../../utils/cloud-url"
import { BookADemo } from "../../book-a-demo/buttons"
import clsx from "clsx"
import Button from "@theme/Button"

const featureList = [
  "Database-as-a-service",
  "Infrastructure monitoring and logs",
  "Built-in auth and TLS encryption",
  "High availability",
  "Up to 80% data compression out-of-the-box",
]

export const Top = () => {
  const cloudUrl = useCloudUrl()
  return (
    <Section className={styles.columns}>
      <div className={styles.textColumn}>
        <Section.Title level={1}>QuestDB Cloud</Section.Title>

        <Section.Subtitle>
          The fastest open source time-series database fully managed on the
          cloud.
        </Section.Subtitle>

        <ul className={styles.list}>
          {featureList.map((feature) => (
            <li className={styles.bullet} key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.startBuildingRoot}>
        <img
          src="/img/pages/cloud/cloud-cpu.png"
          width={478}
          height={176}
          alt="An image showing QuestDB Cloud instance details"
          className={clsx(
            styles.startBuildingImage,
            styles.instanceDetailsImage,
          )}
        />
        <img
          src="/img/pages/cloud/cloud-metrics.png"
          width={478}
          height={124}
          alt="An image showing CPU usage graph from QuestDB Cloud instance"
          className={clsx(
            styles.startBuildingImage,
            styles.instanceMetricsImage,
          )}
        />
        <Button
          variant="primary"
          className={clsx(
            styles.startBuildingButton,
            "plausible-event-name=Click+Button+Cloud+Top",
          )}
          to={cloudUrl}
          newTab={false}
        >
          Start building now
        </Button>
        <BookADemo className={styles.actions} />

        <span className={styles.startBuildingCredits}>
          $200 in free credits
        </span>
      </div>
    </Section>
  )
}
