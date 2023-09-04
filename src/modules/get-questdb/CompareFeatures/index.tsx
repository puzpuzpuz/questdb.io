import React from "react"
import { Section } from "../../../components/Section"
import { Col, Row } from "../../../components/FeatureTable/types"
import { FeatureTable } from "../../../components/FeatureTable"

import styles from "./styles.module.css"

const cols: Col[] = [
  {
    title: "Open Source",
    width: "250px",
  },
  {
    title: "QuestDB Enterprise",
    width: "250px",
  },
  {
    title: "QuestDB Cloud",
    width: "250px",
  },
]

const rows: Row[] = [
  {
    title: "Core database features",
    description:
      "High throughput, schema-agnostic ingestion via InfluxDB line protocol, fast SQL analytics, and time-series SQL extensions. Support for PostgreSQL wire protocol and REST API. Built-in SQL Web Console.",
    values: ["available", "available", "available"],
  },
  {
    title: "Enterprise features self hosted, on-premises",
    values: ["unavailable", "available", "unavailable"],
  },
  {
    title: "Fully hosted offering on AWS",
    values: ["unavailable", "unavailable", "available"],
  },
  {
    title: "Role-based access control",
    description:
      "Column level, fine grained permission model that includes on-the-fly permission and account changes, secure secret storage, and an unlimited number of accounts.",
    values: ["unavailable", "available", "available"],
  },
  {
    title: "Compression",
    description:
      "Significantly reduces storage costs, while reduced disk IO can lead to performance gains. Compression ratios vary depending on the data layout.",
    values: ["unavailable", "available", "available"],
  },
  {
    title: "Automated backups",
    values: ["unavailable", "available", "available"],
  },
  {
    title: "High availability",
    description:
      "Hot, cold and on-demand read replicas. Cross availability zone (AZ) setup.",
    values: ["unavailable", "available", "available"],
  },
  {
    title: "TLS",
    description: "High-performance TLS Encryption for all network endpoints.",
    values: ["unavailable", "available", "available"],
  },
  {
    title: "Kubernetes Operator",
    description:
      "Deploy QuestDB on your servers via our native Kubernetes Enterprise operator.",
    values: ["unavailable", "available", "available"],
  },
  {
    title: "Enterprise SLA",
    values: ["unavailable", "available", "unavailable"],
  },
]

export const CompareFeatures = () => (
  <Section center fullWidth>
    <Section noGap className={styles.root}>
      <FeatureTable rows={rows} cols={cols} firstColWidth="250px" />
    </Section>
  </Section>
)
