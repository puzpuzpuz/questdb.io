import React from "react"
import { Section } from "../../../components/Section"
import styles from "./styles.module.css"
import Shield from "../../../../static/img/icons/shield.svg"
import HddStack from "../../../../static/img/icons/hdd-stack.svg"
import LineGraph from "../../../../static/img/icons/line-graph.svg"
import SvgImage from "../../../components/SvgImage"

type Card = {
  title: string
  description: string
  icon: {
    component: JSX.Element
    alt: string
  }
}

const cards: Card[] = [
  {
    title: "Secure self-hosted environment",
    description:
      "Robust security features to secure your bring-your-own-Cloud or self-hosted infrastructure.",
    icon: {
      component: <Shield width="48" height="48" />,
      alt: "Shield icon",
    },
  },

  {
    title: "Horizontal scalability",
    description:
      "High-performance data replication and clustering to safeguard your data and scale queries horizontally.",
    icon: {
      component: <HddStack width="48" height="48" />,
      alt: "Disk drive stack icon",
    },
  },

  {
    title: "Access control",
    description:
      "Assign roles and control data access via an enterprise-grade fine-grained permission model.",
    icon: {
      component: <LineGraph width="48" height="48" />,
      alt: "Line graph icon",
    },
  },
]

export const Description = () => (
  <Section center className={styles.root}>
    <Section.Title level={2} size="small" center>
      Why use QuestDB Enterprise?
    </Section.Title>

    <div className={styles.cards}>
      {cards.map((card, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.cardIcon}>
            <SvgImage image={card.icon.component} title={card.icon.alt} />
          </div>
          <div className={styles.cardTitle}>{card.title}</div>
          <div className={styles.cardDescription}>{card.description}</div>
        </div>
      ))}
    </div>
  </Section>
)
