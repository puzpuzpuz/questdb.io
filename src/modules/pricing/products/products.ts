import { toPlausibleClassname } from "../../../utils/plausible"
import { getCloudUrl } from "../../../utils/cloud-url"

type Label = string | { text: string; emphasized: true }

const cloudUrl = getCloudUrl("Website", "Pricing", "Signup")

export type ProductInfo = {
  type: "open-source" | "cloud" | "enterprise"
  title: string
  subtitle: string
  highlight?: string
  pricingLabel: Label[]
  pricingSublabel: Label[]
  specs: Array<{ label: string; href: string } | string>
  url: string
  ctaLabel: string
  eventLink?: string
}

export const products: ProductInfo[] = [
  {
    type: "open-source",
    title: "Open Source",
    subtitle: "Apache 2.0 License",
    pricingLabel: [{ text: "Free", emphasized: true }],
    pricingSublabel: ["forever"],
    specs: [
      "Fast ingest, dynamic schema",
      "Sub-second SQL queries",
      "Excels with high-cardinality data",
      "Time-series SQL extensions",
    ],
    url: "/download/",
    ctaLabel: "Download",
    eventLink: toPlausibleClassname("Click Secondary Pricing Download"),
  },

  {
    type: "cloud",
    title: "QuestDB Cloud",
    subtitle: "Fully hosted by QuestDB",
    highlight: "$200 credit for new users",
    pricingLabel: [
      "from",
      {
        // hard-coded from hourly price of
        // us-east-2 instance with
        // * 2 CPU
        // * 8 GB RAM
        // * 25 GB storage
        text: "$0.345",
        emphasized: true,
      },
      "per hour",
    ],
    pricingSublabel: [
      {
        // multiplying hourly price
        // by 730
        text: "$252",
        emphasized: true,
      },
      "per month (est)",
    ],
    specs: [
      "Up to 80% compression ratio",
      "Elastic & highly available",
      "Role-based permissions",
      {
        label: "Explore pricing",
        href: "#pricing-options",
      },
    ],
    url: cloudUrl,
    ctaLabel: "Signup",
    eventLink: toPlausibleClassname("Click Secondary Pricing Signup"),
  },

  {
    type: "enterprise",
    title: "QuestDB Enterprise",
    subtitle: "Self-hosted, custom specs",
    pricingLabel: [{ text: "Contact us", emphasized: true }],
    pricingSublabel: ["for a quote"],
    specs: [
      "Security and permissions",
      "High availability",
      "Kubernetes operator",
      "Enterprise SLAs",
    ],
    url: "/enterprise/",
    ctaLabel: "Explore",
    eventLink: toPlausibleClassname("Click Secondary Pricing Contact"),
  },
]
