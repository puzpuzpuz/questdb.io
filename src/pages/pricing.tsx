import React from "react"
import Layout from "../theme/Layout"
import { Section } from "../components/Section"
import { Products } from "../modules/pricing/products"
import { HighPerformer } from "../modules/pricing/high-performer"
import { Quotes } from "../modules/pricing/quotes"
import { PlanCalculator } from "../modules/pricing/pricing-calculator"

const CloudPage = () => (
  <Layout
    canonical="/pricing"
    description="Pricing details of QuestDB Cloud. We bring elasticity, availability and security with a fully managed Cloud offering"
    title="Pricing"
    image="/img/pages/cloud/screens-thumb.png"
  >
    <Section>
      <Section.Title level={1} center>
        QuestDB Pricing
      </Section.Title>
    </Section>

    <Section center>
      <Products />
    </Section>

    <Section center noGap>
      <Quotes />
    </Section>

    <Section center odd fullWidth>
      <HighPerformer />
    </Section>

    <Section id="pricing-options">
      <PlanCalculator />
    </Section>
  </Layout>
)

export default CloudPage
