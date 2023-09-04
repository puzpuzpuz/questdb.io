import React from "react"
import Button from "@theme/Button"
import { Section } from "../../../components/Section"
import styles from "./styles.module.css"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import MailIcon from "../../../assets/icons/mail.svg"
import UserCheckIcon from "../../../assets/icons/user-check.svg"
import DownloadIcon from "../../../assets/icons/download.svg"
import { usePluginData } from "@docusaurus/useGlobalData"
import { Release } from "../../../utils"

export const Products = () => {
  const { release } = usePluginData<{ release: Release }>(
    "fetch-latest-release",
  )

  const list = [
    {
      key: "questdb-open-source",
      beforeTitle: (
        <a href={release.html_url} className={clsx(styles.tag, styles.success)}>
          {release.name}
        </a>
      ),
      title: (
        <h3 className={styles.title}>
          QuestDB <br />
          Open Source
        </h3>
      ),
      afterTitle: "Apache 2.0 License",
      description: (
        <p className={styles.description}>
          10x faster ingestion vs InfluxDB
          <br />
          Sub-second SQL queries
          <br />
          Time-series SQL extensions
        </p>
      ),
      cta: (
        <Button to="/download/" icon={<DownloadIcon width="18" height="18" />}>
          Download
        </Button>
      ),
      linkText: "Live demo",
      linkHref: "https://demo.questdb.io",
    },
    {
      key: "questdb-enterprise",
      title: (
        <h3 className={styles.title}>
          QuestDB <br />
          <em>Enterprise</em>
        </h3>
      ),
      afterTitle: "Self Hosted, Custom Specs",
      description: (
        <p className={styles.description}>
          Self-hosted Enterprise suite
          <br />
          Secure & highly available
          <br />
          Enterprise SLAs
        </p>
      ),
      cta: (
        <Button
          to="/enterprise/contact/"
          icon={<MailIcon width="18" height="18" />}
        >
          Contact us
        </Button>
      ),
      linkText: "Features",
      linkHref: "/enterprise/",
    },
    {
      key: "questdb-cloud",
      beforeTitle: <span className={styles.tag}>$200 free credits</span>,
      title: (
        <h3 className={styles.title}>
          QuestDB <br />
          <em>Cloud</em>
        </h3>
      ),
      afterTitle: "Fully Hosted By QuestDB",
      description: (
        <p className={styles.description}>
          Fully hosted solution
          <br />
          Replication and Point-in-time recovery
          <br />
          Up to 80% compression ratio
        </p>
      ),
      cta: (
        <Button
          href="https://cloud.questdb.com"
          newTab={false}
          icon={<UserCheckIcon width="18" height="18" />}
        >
          Sign up
        </Button>
      ),
      ctaHelperText: "No card required",
      linkText: "Features",
      linkHref: "/cloud/",
    },
  ]

  return (
    <Section center className={styles.root}>
      <Section.Subtitle center>
        Ways to get started with QuestDB:
      </Section.Subtitle>
      <div className={styles.columns}>
        {list.map((item) => (
          <div className={styles.column} key={item.key}>
            <div className={styles.beforeTitle}>{item.beforeTitle}</div>
            {item.title}
            {item.description}
            <Link to={item.linkHref} className={styles.link}>
              {item.linkText} &gt;
            </Link>
            <span
              className={clsx(styles.ctaWrapper, {
                [styles.transparent]: item.ctaHelperText === undefined,
              })}
            >
              {item.cta}
              {item.ctaHelperText !== undefined && (
                <span className={styles.ctaText}>{item.ctaHelperText}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
