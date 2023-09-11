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
      "Long-term storage and real-time analysis for constantly flowing financial tick data",
    image: "/img/pages/use-cases/financial-market-data.svg",
  },
  {
    key: "industrial-analytics",
    title: "Industrial IoT",
    description:
      "Collect high cardinality data from vast industrial plant sensors to space vehicles \n",
    image: "/img/pages/use-cases/industrial-telemetry.svg",
  },
  {
    key: "monitoring-and-real-time-analytics",
    title: "Monitoring & analytics",
    description:
      "Observability of time series data from applications and infrastructure",
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
