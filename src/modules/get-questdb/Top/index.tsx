import React from "react"
import { Section } from "../../../components/Section"

import styles from "./styles.module.css"

export const Top = () => (
  <Section center className={styles.root}>
    <Section.Title level={1}>Get QuestDB</Section.Title>
    <Section.Subtitle center className={styles.subtitle}>
      The fastest open source time-series database. <br />
      Open source, self-hosted Enterprise or fully managed.
    </Section.Subtitle>
  </Section>
)
