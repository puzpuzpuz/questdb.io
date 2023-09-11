import React from "react"
import Layout from "../theme/Layout"
import { Section } from "../components/Section"

import seCss from "../css/section.module.css"
import clsx from "clsx"

import UseCaseCustomers, { Customer } from "../components/UseCaseQuotes"
import { Highlights } from "../modules/highlights"

import liCss from "../css/use-cases/list.module.css"
import ucCss from "../css/use-cases/use-case.module.css"
import prCss from "../css/property.module.css"
import Link from "@docusaurus/Link"

const highCardinalityLink = (
  <>
    Store <Link to="/glossary/high-cardinality/">high-cardinality</Link> sensor
    data with continuous data ingestion
  </>
)

const pythonClientLink = (
  <>
    Financial data modelling: fast ingest & retrieval of{" "}
    <Link to="/docs/third-party-tools/pandas/">pandas data frames</Link>
  </>
)

const asofJoinsLink = (
  <>
    Match and correlate multiple feeds with fuzzy timestamp{" "}
    <Link to="/docs/reference/sql/join/#asof-join">JOINs</Link>
  </>
)

const ipv4TypeLink = (
  <>
    Network traffic flow analysis with the native{" "}
    <Link to="/docs/reference/sql/datatypes/#ipv4">IPv4 data type</Link>
  </>
)

const List = ({
  items,
  itemClassName,
}: {
  items: React.ReactNode[]
  itemClassName: string
}) => (
  <ul className={clsx(liCss.list, ucCss.list)}>
    {items.map((text, index) => (
      <li key={index} className={itemClassName}>
        {text}
      </li>
    ))}
  </ul>
)

const Heading = () => (
  <Section center>
    <Section.Title level={1}>Use cases and industries</Section.Title>
    <Section.Subtitle center style={{ maxWidth: "800px" }}>
      QuestDB solves ingestion speed bottlenecks, combining performance with
      simplicity through SQL and native time-series extensions.
    </Section.Subtitle>
  </Section>
)

const monitoringCustomers: Customer[] = [
  {
    key: "syndica",
    quote:
      "See how Syndica builds Web3 with QuestDB for real-time analytics and intensive time-series dashboards.",
    caseStudyLink: "/case-study/syndica/",
    logoWidth: 100,
  },
  {
    key: "yahoo",
    quote:
      "See how Yahoo uses QuestDB to monitor and autoscale cloud clusters that serve a billion users",
    caseStudyLink: "/case-study/yahoo/",
    logoWidth: 100,
  },
  {
    key: "airtel",
    logoWidth: 100,
  },
  {
    key: "liveaction",
    quote:
      "QuestDB is used by LiveAction as a time series database for storing flow and encrypted traffic metadata analyzed by their real-time threat detection engine.",
    caseStudyLink: "/case-study/liveaction/",
    logoWidth: 120,
  },
  {
    key: "netapp",
    logoWidth: 100,
  },
  {
    key: "motion",
    logoWidth: 110,
    logoHeight: 35,
  },
  {
    key: "central-group",
  },
  {
    key: "cloudera",
    logoWidth: 100,
  },
]

const Monitoring = () => (
  <section className={seCss.section} id="monitoring-and-real-time-analytics">
    <div className={clsx(seCss["section--inner"], ucCss.section)}>
      <img
        src="/img/pages/use-cases/real-time-analytics-jumbo.svg"
        alt="An illustration of real-time analytics and monitoring"
        width="630"
        className={ucCss["use-case__image--monitoring"]}
      />
      <div className={ucCss["use-case__half"]}>
        <h2 className={clsx(seCss.section__title, ucCss["use-case__title"])}>
          Monitoring and analytics
        </h2>

        <List
          itemClassName={clsx(liCss.item, ucCss.listItem)}
          items={[
            "API usage data real-time monitoring",
            ipv4TypeLink,
            "Track Ad Impressions, Clicks, and Conversions ",
            "In-app behavioural data and product application analytics",
            "Build real-time dashboards with on-the-fly aggregations and down-sampling",
          ]}
        />
      </div>
    </div>

    <div className={clsx(seCss["section--inner"], ucCss.section)}>
      <div className={ucCss["use-case__industries"]}>
        <h4>Applicable industries</h4>
        <List
          itemClassName={clsx(prCss.property, ucCss["use-case__property"])}
          items={[
            "Network Traffic Analysis",
            "E-commerce",
            "Ad-Tech",
            "Blockchain / Web 3",
            "Telecommunication Traffic",
          ]}
        />
      </div>

      <UseCaseCustomers customers={monitoringCustomers} />
    </div>
  </section>
)

const marketDataCustomers: Customer[] = [
  {
    key: "aquis-exchange",
    logoWidth: 90,
    quote:
      "QuestDB is used by Aquis Exchange to store their infrastructure and business metrics in a single place and analyze them in real-time across multiple dimensions.",
    caseStudyLink: "/case-study/aquis/",
  },
  {
    key: "norlys-energy-trading",
    logoWidth: 120,
  },
  {
    key: "okx",
    logoWidth: 60,
  },
  {
    key: "coinbase",
    logoWidth: 120,
  },
]

const MarketData = () => (
  <section className={seCss.section} id="financial-market-data">
    <div className={clsx(seCss["section--inner"], ucCss.section)}>
      <img
        src="/img/pages/use-cases/financial-market-data-jumbo.svg"
        alt="An illustration of financial market data charts"
        width="565"
        className={ucCss["use-case__image"]}
      />
      <div className={ucCss["use-case__half"]}>
        <h2 className={clsx(seCss.section__title, ucCss["use-case__title"])}>
          Financial market data
        </h2>

        <List
          itemClassName={clsx(liCss.item, ucCss.listItem)}
          items={[
            "Trade monitoring: long-term market data storage and real-time analysis for orders and trades",
            "Historical market data analysis and ad-hoc analytics",
            "Fast aggregations for OHLC and candlestick charts",
            pythonClientLink,
            "Infrastructure and business metrics: latency reports, PnL, log orders and trades",
            asofJoinsLink,
          ]}
        />
      </div>
    </div>

    <div className={clsx(seCss["section--inner"], ucCss.section)}>
      <div className={ucCss["use-case__industries"]}>
        <h4>Applicable industries</h4>
        <List
          itemClassName={clsx(prCss.property, ucCss["use-case__property"])}
          items={[
            "Banks",
            "Hedge funds",
            "Exchanges",
            "Energy trading firms",
            "Financial data platforms",
          ]}
        />
      </div>

      <UseCaseCustomers customers={marketDataCustomers} />
    </div>
  </section>
)

const industrialTelemetryCustomers: Customer[] = [
  {
    key: "copenhagen-atomics",
    quote:
      "Copenhagen Atomics, manufacturer of next generation molten salt reactors, uses QuestDB to monitor their thorium reactors in real time.",
    caseStudyLink: "/case-study/copenhagen-atomics/",
    logoWidth: 120,
  },
  {
    key: "weidmann",
    logoWidth: 120,
  },
  {
    key: "airbus",
    logoWidth: 120,
  },
  {
    key: "electric_era",
    logoWidth: 120,
  },
]

const IndustrialTelemetry = () => (
  <section className={seCss.section} id="industrial-analytics">
    <div className={clsx(seCss["section--inner"])}>
      <div className={ucCss["use-case__half"]}>
        <h2 className={clsx(seCss.section__title, ucCss["use-case__title"])}>
          Industrial IoT
        </h2>

        <List
          itemClassName={clsx(liCss.item, ucCss.listItem)}
          items={[
            highCardinalityLink,
            "Process metrics in the manufacturing process, such as vibration, pressure and temperature",
            "Telemetry data from space launch vehicles such as rockets or satellites",
            "Batteries consumption data directly from the physical batteries on-site",
            "React to industrial anomalies in real time with our Grafana dashboard integration",
            "Track fleets and trajectories of aircraft, cargo ships or satellites with native geospatial features",
          ]}
        />
      </div>
      <img
        src="/img/pages/use-cases/industrial-telemetry-jumbo.svg"
        alt="An illustration of industrial analytics charts"
        width="585"
        className={ucCss["use-case__image"]}
      />
    </div>

    <div className={clsx(seCss["section--inner"])}>
      <UseCaseCustomers customers={industrialTelemetryCustomers} columnLayout />

      <div
        className={clsx(
          ucCss["use-case__industries"],
          ucCss["use-case__industries--wide"],
        )}
      >
        <h4>Applicable industries</h4>
        <List
          itemClassName={clsx(prCss.property, ucCss["use-case__property"])}
          items={[
            "Energy and Renewables ",
            "Space and Defence",
            "Transportation and Mobility",
            "Manufacturing and Automation ",
            "Telco Network base stations",
          ]}
        />
      </div>
    </div>
  </section>
)

const title = "Use Cases"
const description =
  "QuestDB offers high throughput ingestion and real-time SQL queries for applications in a wide range of use cases and industries"

const UseCasesPage = () => (
  <Layout canonical="/use-cases" description={description} title={title}>
    <Heading />
    <Highlights />
    <MarketData />
    <IndustrialTelemetry />
    <Monitoring />
  </Layout>
)

export default UseCasesPage
