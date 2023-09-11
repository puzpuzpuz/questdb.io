import clsx from "clsx"
import React from "react"
import Customers from "../components/Customers"
import customFields from "../config/customFields"
import { QueryScroller } from "../components/QueryScroller"
import { Link } from "react-router-dom"

import Layout from "../theme/Layout"
import { Header } from "../modules/index-header"
import { Section } from "../components/Section"
import { UseCases } from "../modules/use-cases"
import { Integration } from "../modules/integration"

import feCss from "../css/index/feature.module.css"
import seCss from "../css/section.module.css"
import LiveDemo from "../modules/index-live-demo"

const Cards = () => (
  <Section odd fullWidth>
    <Section noGap>
      <Section.Title level={3} size="small" center>
        Why time series?
      </Section.Title>

      <div
        className={clsx(
          seCss.section__footer,
          seCss["section__footer--feature-cards"],
        )}
      >
        {[
          {
            header: "Financial market data",
            content: (
              <>
                Store years of market tick data to identify historical trends,
                and correlate it with orders and executed trades via{" "}
                <Link to="/docs/reference/sql/join/#asof-join">ASOF joins</Link>
                . Monitor market activity in real-time, compute time-series
                charts and price candles on the fly. Open source kdb+
                alternative.
              </>
            ),
          },

          {
            header: "Application metrics",
            content:
              "Track and visualize user behavior data, API calls, data latency, and other application events and analytics in real-time.",
          },

          {
            header: "Connected devices, IoT",
            content: (
              <>
                Capture, store and respond to sensor data and telemetry at any
                resolution in industrial applications—process{" "}
                <Link to="/glossary/high-cardinality">
                  high cardinality data
                </Link>{" "}
                without hiccups.
              </>
            ),
          },

          {
            header: "Network traffic analysis",
            content: (
              <>
                Ingest Flow or other network traffic metadata leveraging
                QuestDB's{" "}
                <Link to="/docs/reference/sql/datatypes/#ipv4">
                  native IPv4 type
                </Link>
                . Detect anomalies in real-time from blasts of networking data.
              </>
            ),
          },

          {
            header: "Machine learning with time-series data",
            content: (
              <>
                Load{" "}
                <Link to="/docs/third-party-tools/pandas/">
                  Pandas DataFrames
                </Link>{" "}
                into QuestDB to the tune of millions of rows per second.
                Download data from QuestDB to train machine learning models.
              </>
            ),
          },

          {
            header: "AdTech",
            content:
              "Monitor user activity by storing and analyzing Ad impressions, clicks, scrolls, and conversions in AdTech platforms.",
          },
        ].map(({ header, content }, index) => (
          <div key={index} className={feCss.feature}>
            <h3 className={feCss.feature__header}>{header}</h3>
            <p className={feCss.feature__content}>{content}</p>
          </div>
        ))}
      </div>
    </Section>
  </Section>
)

const Console = () => (
  <Section fullWidth>
    <Section.Title size="small" center>
      Interactive Console
    </Section.Title>

    <Section.Subtitle center>
      Interactive console to import data (drag and drop) and start querying
      right away.
    </Section.Subtitle>

    <Section.Subtitle center>
      Check our{" "}
      <a href="/docs/develop/web-console/">Web Console documentation</a> to get
      started.
    </Section.Subtitle>

    <Section center>
      <img
        loading="lazy"
        alt="Artistic view of QuestDB's Web Console split in 3 components: the navigation tree, the SQL code editor and data displayed as a chart"
        width={600}
        height={467}
        src="/img/pages/index/console.svg"
      />
    </Section>
  </Section>
)

const Home = () => (
  <Layout
    canonical=""
    description={customFields.description}
    title="QuestDB | Fast SQL for time-series"
    replaceTitle
  >
    <Header />
    <Customers />
    <Section fullWidth center>
      <UseCases />
    </Section>

    <LiveDemo />

    <Section fullWidth odd>
      <Integration />
    </Section>

    <QueryScroller />
    <Cards />
    <Console />
  </Layout>
)

export default Home
