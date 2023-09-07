import { useLocation } from "react-router-dom"
import { getCloudUrl } from "../../utils/cloud-url"
import { hyphenToPascalCase } from "../../utils/hyphen-to-pascal"

type Props = {
  url: string
  source: string
  destination: string
  ctaLabel: string
}

export const useProps = (): Props => {
  const { pathname } = useLocation()
  const origin = pathname.split("/")[1]

  switch (origin) {
    case "cloud":
      return {
        ctaLabel: "Cloud Signup",
        source: "Cloud",
        destination: "Signup",
        url: getCloudUrl("Website", "Cloud", "Signup"),
      }
    case "download":
      return {
        ctaLabel: "Try QuestDB Cloud",
        source: "Download",
        destination: "Cloud",
        url: "/cloud/",
      }
    case "enterprise":
      return {
        ctaLabel: "Contact Us",
        source: "Enterprise",
        destination: "Contact",
        url: "/enterprise/contact/",
      }
    default:
      return {
        ctaLabel: "Get QuestDB",
        source: origin === "" ? "Homepage" : hyphenToPascalCase(origin),
        destination: "Get",
        url: "/get-questdb/",
      }
  }
}
