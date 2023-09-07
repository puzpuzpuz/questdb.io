import React from "react"
import { Section } from "../../../components/Section"
import styles from "./styles.module.css"

const featureList = [
  "Responsive support",
  "Infrastructure monitoring and logs",
  "Built-in auth and TLS encryption",
  "High availability",
  "Up to 80% data compression out-of-the-box",
]

export const Top = () => {
  return (
    <Section className={styles.columns}>
      <div className={styles.textColumn}>
        <Section.Title level={1}>QuestDB Cloud</Section.Title>

        <Section.Subtitle className={styles.subtitle}>
          QuestDB, fully managed. Enterprise-grade features. Transparent and
          simple pricing.
        </Section.Subtitle>

        <ul className={styles.list}>
          {featureList.map((feature) => (
            <li className={styles.bullet} key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.illustrations}>
        <img
          src="/img/pages/cloud/cloud-cpu.png"
          width={478}
          height={176}
          alt="An image showing QuestDB Cloud instance details"
        />
        <img
          src="/img/pages/cloud/cloud-metrics.png"
          width={478}
          height={124}
          alt="An image showing CPU usage graph from QuestDB Cloud instance"
        />
      </div>
    </Section>
  )
}
