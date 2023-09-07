import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"

import Button from "@theme/Button"
import { useProps } from "./use-props"
import { toPlausibleClassname } from "../../utils/plausible"

export function MainCTA() {
  const { url, source, destination, ctaLabel } = useProps()

  return (
    <Button
      className={clsx(
        styles.ctaButton,
        styles.getQuestdb,
        toPlausibleClassname("Click Primary", source, destination),
      )}
      size="xsmall"
      variant="secondary"
      to={url}
    >
      {ctaLabel}
    </Button>
  )
}
