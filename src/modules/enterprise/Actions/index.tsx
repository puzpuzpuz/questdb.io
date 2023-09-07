import React from "react"
import { Section } from "../../../components/Section"
import Button from "@theme/Button"
import Link from "@docusaurus/Link"

import styles from "./styles.module.css"
import { toPlausibleClassname } from "../../../utils/plausible"

export const Actions = () => (
  <Section className={styles.root}>
    <div className={styles.actionButtons}>
      <Link to="/enterprise/contact">
        <Button
          className={toPlausibleClassname("Click Secondary Enterprise Contact")}
          variant="primary"
        >
          Contact us
        </Button>
      </Link>{" "}
      or{" "}
      <Link to="/enterprise/book-a-demo">
        <Button
          className={toPlausibleClassname("Click Secondary Enteprise Demo")}
          variant="secondary"
        >
          Book a demo
        </Button>
      </Link>
    </div>
  </Section>
)
