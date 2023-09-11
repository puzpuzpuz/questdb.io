import React from "react"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

const useCases = [
  {
    title: "Performance",
    uses: [
      "Ingest 2M rows/s per node",
      "5-10x faster vs Timescale & Influx",
      "Don’t worry about cardinality",
      "Columnar storage",
      "Data partitioned by time",
      "SIMD-optimized queries",
    ],
    cta: {
      label: "See Benchmarks",
      url: "/blog/tags/benchmark/",
    },
  },
  {
    title: "Developer experience",
    uses: [
      "SQL time series extensions",
      "Built-in SQL optimizer & REST API",
      "PostgreSQL driver compatibility",
      "InfluxDB Line Protocol API",
      "SQL and time-series joins",
      "Grafana integration",
    ],
    cta: {
      label: "See live demo",
      url: "https://demo.questdb.io",
    },
  },
  {
    title: "Enterprise ready",
    uses: [
      "TLS for all protocols",
      "Hot & cold read replicas",
      "Role-based access control",
      "Multiple availability zones",
      "Data compression",
      "Enterprise support SLA",
    ],

    cta: {
      label: "See Enterprise",
      url: "/enterprise/",
    },
  },
]

export const UseCases = () => (
  <div className={styles.root}>
    {useCases.map(({ title, uses, cta }, index) => (
      <div className={styles.card} key={index}>
        <h2>{title}</h2>

        <ul className={styles.list}>
          {uses.map((use, index) => (
            <li key={index} className={styles.listItem}>
              {use}
            </li>
          ))}
        </ul>

        <Link className={styles.link} href={cta.url}>
          {cta.label}
        </Link>
      </div>
    ))}
  </div>
)
