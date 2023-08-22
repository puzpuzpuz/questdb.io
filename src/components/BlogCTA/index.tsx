import ctaCss from "./styles.module.css"
import React from "react"
import Button from "@theme/Button"
import { useCloudUrl } from "../../utils/cloud-url"

type BlogCTAProps = {
  buttonText: string
}

export const BlogCTA = ({ buttonText }: BlogCTAProps) => {
  const cloudUrl = useCloudUrl()
  const flavourText =
    "Blasting fast ingest. SQL analytics. No CC + $200 in free credit."
  return (
    <div className={ctaCss.ctaContainer}>
      <div className={ctaCss.ctaSection}>
        <div className={ctaCss.ctaButtonContainer}>
          <Button
            className="plausible-event-name=Click+Button+Blog"
            to={cloudUrl}
            newTab={false}
          >
            {buttonText}
          </Button>
          <span> {flavourText} </span>
        </div>
      </div>
    </div>
  )
}
