import React from "react"
import { Section } from "../../components/Section"
import styles from "./styles.module.css"

type Highlight = {
  key: string
  title: string
  description: string
  image: string
}

const useCaseHighlights: Highlight[] = [
  {
    key: "financial-market-data",
    title: "Financial market data",
    description:
      "Long-term storage and real-time analysis for financial tick data",
    image: "/img/pages/use-cases/financial-market-data.svg",
  },
  {
    key: "industrial-analytics",
    title: "Industrial analytics",
    description:
      "Collect high cardinality metrics at scale from batteries, plants, space launch vehicles or any type of IIoT sensor \n",
    image: "/img/pages/use-cases/industrial-telemetry.svg",
  },
  {
    key: "monitoring-and-real-time-analytics",
    title: "Monitoring & analytics",
    description:
      "Analytics and monitoring for time series data generated from software applications and infrastructure",
    image: "/img/pages/use-cases/real-time-analytics.svg",
  },
]

export const Highlights = () => (
  <Section center noGap className={styles.root}>
    {useCaseHighlights.map((highlight, index) => (
      <div className={styles.card} key={index}>
        <img
          src={highlight.image}
          alt={highlight.title}
          className={styles.image}
        />
        <h3 className={styles.title}>{highlight.title}</h3>
        <p className={styles.description}>{highlight.description}</p>
        <a href={`#${highlight.key}`} className={styles.cta}>
          Learn more
        </a>
      </div>
    ))}
  </Section>
)
