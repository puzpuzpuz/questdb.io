import React from "react"
import Button from "@theme/Button"
import { Section } from "../../components/Section"
import styles from "./styles.module.css"
import { toPlausibleClassname } from "../../utils/plausible"

export const Header = () => {
  return (
    <Section fullWidth center>
      <div className={styles.titles}>
        <Section.Title level={1} className={styles.header}>
          Fast SQL for time-series
        </Section.Title>

        <Section.Subtitle className={styles.subheader} center>
          Columnar open source time-series database with high performance
          ingestion and blazingly fast SQL analytics. Self-hosted or fully
          managed.
        </Section.Subtitle>

        <div className={styles.mainCTA}>
          <Button
            className={toPlausibleClassname("Click Secondary Main Get")}
            to="/get-questdb"
            newTab={false}
          >
            Get QuestDB
          </Button>
          <span>Choose the right product</span>
        </div>
      </div>
    </Section>
  )
}
