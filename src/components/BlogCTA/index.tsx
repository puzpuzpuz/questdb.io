import ctaCss from "./styles.module.css"
import React from "react"
import Button from "@theme/Button"
import { getCloudUrl } from "../../utils/cloud-url"
import { toPlausibleClassname } from "../../utils/plausible"

type BlogCTAProps = {
  buttonText: string
}

export const BlogCTA = ({ buttonText }: BlogCTAProps) => {
  const cloudUrl = getCloudUrl("Website", "Blog", "Signup")
  const flavourText =
    "Blasting fast ingest. SQL analytics. $200 in free credit."
  return (
    <div className={ctaCss.ctaContainer}>
      <div className={ctaCss.ctaSection}>
        <div className={ctaCss.ctaButtonContainer}>
          <Button
            className={toPlausibleClassname("Click Secondary Blog Signup")}
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
