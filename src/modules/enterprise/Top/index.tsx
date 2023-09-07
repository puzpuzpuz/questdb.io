import React from "react"
import { Section } from "../../../components/Section"

import styles from "./styles.module.css"

export const Top = () => (
  <Section center noGap className={styles.root}>
    <Section.Title className={styles.title} level={1}>
      QuestDB Enterprise
    </Section.Title>
    <Section.Subtitle center className={styles.subtitle}>
      Self hosted. Everything from open source, plus premium features to secure,
      organize and scale your QuestDB deployments.
    </Section.Subtitle>
  </Section>
)
