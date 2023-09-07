import React from "react"
import { BookADemo } from "../../book-a-demo/buttons"
import { Section } from "../../../components/Section"
import Button from "@theme/Button"
import styles from "./styles.module.css"
import { toPlausibleClassname } from "../../../utils/plausible"

export const GetStarted = () => (
  <Section center fullWidth noGap className={styles.root}>
    <Button
      className={toPlausibleClassname("Click Secondary Pricing Get")}
      size="small"
      to="/get-questdb/"
    >
      Get QuestDB
    </Button>
    Have questions?
    <BookADemo />
  </Section>
)
