import clsx from "clsx"
import React from "react"

import Button from "@theme/Button"
import Layout from "../../theme/Layout"
import CodeBlock from "@theme/CodeBlock"
import { Image } from "../../components/Image"

import caCss from "../../css/case-study/card.module.css"
import juCss from "../../css/case-study/jumbotron.module.css"
import ouCss from "../../css/case-study/outcome.module.css"
import seCss from "../../css/section.module.css"

const contentAnalyticsQuery = `
create table IF NOT EXISTS content_analytics_ (
  ts TIMESTAMP,
  ua TIMESTAMP,
  ca TIMESTAMP,
  ContentId SYMBOL CAPACITY 50000 CACHE,
  StreamingPartnerId SYMBOL CAPACITY 500 CACHE,
  TotalRequestIds long,
  TotalUserIds long,
  SegmentCount long,
  TotalFileSize long
) timestamp(ts) PARTITION BY DAY;
`.trim()

const deviceAnalyticsQuery = `
SELECT
  Upper(userdevice) AS UserDevice,
  Upper(userdevicebrand) AS UserDeviceBrand,
  Upper(useros) AS UserOS,
  Sum(totalrequestids) AS RequestId,
  Sum(totaluserids) AS UserId,
  Sum(segmentcount) AS SegmentCount,
  Sum(totalfilesize) AS TotalFileSize
FROM
  'device_analytics_'
`.trim()

const values = [
  {
    description: "Use case: Application metrics, analytics, dashboards",
    icon: {
      alt: "Breafcase icon",
      src: "/img/pages/case-study/icons/briefcase.svg",
    },
  },
  {
    description: 'Industry: "Over the Top" streaming media',
    icon: {
      alt: "Globe icon",
      src: "/img/pages/case-study/icons/globe.svg",
    },
  },
  {
    description: "Deployment: self-hosted QuestDB",
    icon: {
      alt: "Flag icon",
      src: "/img/pages/case-study/icons/flag.svg",
    },
  },
]

const XStreamPlay = () => {
  const title = "Airtel XStream Play"
  const description =
    "QuestDB is used by Airtel XStream Play streaming media service to store and analyze their user engagement metrics in real-time."

  return (
    <Layout
      canonical="/case-study/airtel-xstream-play"
      description={description}
      title={title}
      image="/img/pages/case-study/airtel-xstream-play/banner.webp"
    >
      <section
        className={clsx(
          seCss.section,
          seCss["section--center"],
          juCss.jumbotron,
        )}
      >
        <div className={juCss.jumbotron__summary}>
          <div className={juCss.jumbotron__header}>
            <Button href="https://www.airtelxstream.in/" variant="plain">
              <img
                alt="Airtel logo"
                className={juCss.jumbotron__logo}
                height={45}
                src="/img/pages/customers/logos/airtel.svg"
                width={100}
              />
            </Button>
            <span className={juCss.jumbotron__name}>Case study</span>
          </div>
          <h1 className={seCss.section__title}>
            Airtel XStream Play uses QuestDB for real-time engagement and device
            insights
          </h1>
          <p
            className={clsx(
              seCss.section__subtitle,
              juCss.jumbotron__description,
            )}
          >
            Learn how Airtel XStream Play uses QuestDB to track engagement and
            device metrics for their rich video media streaming service.
          </p>
        </div>

        <div className={juCss.jumbotron__banner}>
          <Image
            alt="Logo of Airtel"
            height={380}
            src="/img/pages/case-study/airtel-xstream-play/airtel-xstream-play.webp"
            width={640}
          />
        </div>
      </section>

      <section className={clsx(seCss.section, seCss["section--odd"])}>
        <div className={clsx(seCss["section--inner"], ouCss.outcome__wrapper)}>
          {values.map(({ icon, description }, index) => (
            <p key={index} className={ouCss.outcome}>
              <img
                alt={icon.alt}
                className={ouCss.outcome__icon}
                src={icon.src}
              />
              {description}
            </p>
          ))}
        </div>
      </section>

      <section className={seCss.section}>
        <div
          className={clsx(
            "markdown",
            seCss["section--inner"],
            seCss["section--column"],
          )}
        >
          <h3>Introducing Airtel XStream Play</h3>
          <p className="font-size--large">
            <a href="https://www.airtelxstream.in/">Airtel XStream Play</a> is
            an "Over the Top" (OTT) media provider, offering high quality media
            streaming services. Millions of subscribers connect to XStream Play
            every month to watch their favourite movies, TV shows and - of
            course - Cricket and football matches. As a subsidiary of Bharti
            Airtel, they are part of a leading global telecommunications company
            with operations in 18 countries across Asia and Africa.
          </p>
          <p className="font-size--large">
            XStream Play is the fastest growing aggregator platform in India,
            with over 100 million users. Their library features a blend of
            Indian and Western content from partners such as Sony LIV, Lionsgate
            Play, Hoichoi, ManoramaMax, Ultra and much more.
          </p>

          <h3>Unpacking the XStream Play analytics opportunity</h3>
          <p className="font-size--large">
            The Airtel XStream Play engineering team wanted to expand their user
            engagement analytics. As an "Over the Top" platform offering rich
            video media, everything happens by time. What time something was
            watched, how long it was watched, which time segments, and from
            which device, are a few of the questions which are of great interest
            to the team and their clients. These data points, which are pulled
            from a regionally distributed content delivery network, inform
            technical concerns like capacity planning and spending, and also
            creative concerns like which content is engaging, and where it might
            drop off.
          </p>

          <Image
            alt="Clients, represented by a laptop, phone and desktop, connecting to a CDN mesh, which then inform QuestDB as to the events. From QuestDB, Grafana and an internal dashboard are pictured."
            height={367}
            src="/img/pages/case-study/airtel-xstream-play/airtel-questdb-architecture.webp"
            width={1100}
            description="Multiple clients, regional points-of-presence queued and batched into QuestDB"
          />

          <h3>
            Why Airtel XStream Play chose QuestDB for monitoring user engagement
          </h3>
          <p className="font-size--large">
            To try and capture their rapidly growing bursts of time series data,
            the Airtel XStream Play team began with Elasticsearch. For lower
            traffic, it worked. But once the team exceeded 100 million users,
            Elasticsearch failed to properly aggregate data. The team also found
            major latency issues as Elasticsearch struggled to manage the
            ingestion throughput.
          </p>

          <p className="font-size--large">
            XStream Play is growing fast. Current ingestion peak is ~500 million
            records per day, or 6,000 per second. For their analytics engine to
            fulfill both its current and future potential, the underlying
            database needed to be able to handle significantly higher
            throughput. That is what brought them to QuestDB.
          </p>

          <p className="font-size--large">
            Ajay Pilaniya, the Senior Engineer at XStream Play responsible for
            the implementation, shares how the team chose QuestDB:
          </p>

          <p className="font-size--large">
            "We initially ran benchmarks on TimescaleDB as a replacement, but
            there were major latency issues," says Ajay. "During that time we
            found a benchmark comparison between TimescaleDB and QuestDB during
            a google search and from there we started exploring QuestDB."
          </p>

          <p className="font-size--large">
            While TimescaleDB is a popular choice for time series given its
            close coupling to PostgreSQL, it was not able to meet the needs at
            the scale of Airtel XStream Play. "QuestDB was able to ingest our
            records much faster than any other database," adds Ajay.
          </p>

          <Image
            alt="TimescaleDB, QuestDB and InfluxDB benchmark comparison via TSBS, with QuestDB clearly in the lead."
            height={367}
            src="/img/pages/case-study/airtel-xstream-play/timescale-questdb-influxdb-benchmark-dark.webp"
            width={700}
            description="TimescaleDB vs. QuestDB vs. InfluxDB via TSBS benchmark"
          />

          <p className="font-size--large">
            Raw performance comparisons are vital for any engineering team
            deciding on a robust and reliable time series database. But until
            implementation begins, it is difficult to understand how a new
            technology will work for any unique, high volume workload. There are
            bound to be hurdles. Responsive support then becomes essential. Says
            Ajay: "We faced some challenges but developers on QuestDB slack
            channel were very helpful due to which we were able to finish our
            proof of concept."
          </p>

          <h3>How Airtel XStream Play uses QuestDB</h3>

          <p className="font-size--large">
            Airtel XStream Play takes advantage of both the high-throughput
            ingest and high-performance querying of QuestDB. Now, searching from
            a very large corpus of information requires only a small selection
            of precise queries.
          </p>

          <p className="font-size--large">
            For example, consider Airtel XStream Play's diverse array of
            potential clients. Clients can look like any type of smartphone,
            smart TV or personal computer. Knowing what a device is capable of
            informs the team as to properties like available network bandwidth
            and screen resolution, so that content can be compressed or encoded
            and thus delivered more efficiently.
          </p>

          <p className="font-size--large">
            To determine this, the following QuestDB query returns clean data,
            and provides aggregate sums:
          </p>

          <CodeBlock>{deviceAnalyticsQuery}</CodeBlock>

          <p className="font-size--large">
            Note that the example query contains no <code>WHERE</code>{" "}
            condition. It scans the entire table and returns all rows. This is a
            testament to QuestDB's performance capabilities within large
            workloads. The end result is a fast, flexible and functional
            internal dashboard.
          </p>

          <p className="font-size--large">
            Content analytics provides another strong example. The following SQL
            statement creates a table for content analytics data, which includes
            properties of the content that was accessed, the number of requests
            made for the content, and the number of unique users who accessed
            the content.
          </p>

          <CodeBlock>{contentAnalyticsQuery}</CodeBlock>

          <p className="font-size--large">
            The query provides fast delivery of the rich data needed to
            visualize and better predict network volume. Consider the value of
            the following chart when planning for network capacity over specific
            windows, like cultural or seasonal events:
          </p>
          <Image
            alt="Overall content metrics, visualized via line graph"
            height={367}
            src="/img/pages/case-study/airtel-xstream-play/content-analytics.webp"
            width={700}
            description="Demonstrating streaming users and hours"
          />
          <p className="font-size--large">
            XStream Play is an at-scale media streaming service generating
            sustained and high throughput event data. To remain competitive, it
            is essential to act on data insights during growth. With QuestDB,
            Airtel and the XStream Play engineering team get everything they
            need without worrying that their storage engine will break as they
            keep growing. It's just rapid ingest, and simple, fast queries.
          </p>

          <p className="font-size--large">
            Ajay and the team at Airtel XStream Play have since been running
            QuestDB in production for over a year. Initially, QuestDB met most
            requirements, however the team had some specific needs that were not
            yet available.
          </p>

          <p className="font-size--large">
            "Most of the requirements were fulfilled by existing features and
            one missing requirement which I raised is also live now," says Ajay.
          </p>

          <p className="font-size--large">
            The missing piece?{" "}
            <a href="/docs/concept/deduplication/">Data deduplication</a>, which
            is live as of QuestDB 7.3.
          </p>

          <div
            className={clsx(
              "markdown",
              seCss["section--inner"],
              seCss["section--column"],
            )}
          >
            <p className={caCss.card__title}>
              <span className={caCss.card__quote}>&ldquo;</span>Switching to
              QuestDB was a game-changer for our analytics. With Elasticsearch,
              we faced frustrating ingestion and read latency issues on
              aggregation queries. But since adopting QuestDB, processing 500M
              records daily has become a breeze.
              <span className={caCss.card__quote}>&rdquo;</span>
            </p>
            <p className={caCss.card__title}>
              <strong>
                Ajay Pilaniya, Lead Media Analytics at Airtel, XStream Play
              </strong>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default XStreamPlay
