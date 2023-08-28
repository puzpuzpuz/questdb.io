import customFields from "../config/customFields"

export const useCloudUrl = (
  utmSource?: string,
  utmContent?: string,
  utmCampaign?: string,
) => {
  const baseUrl = customFields.cloudUrl
  const utmParams = [
    utmSource ? `utm_source=${utmSource}` : "",
    utmContent ? `utm_content=${utmContent}` : "",
    utmCampaign ? `utm_campaign=${utmCampaign}` : "",
  ]
    .filter(Boolean)
    .join("&")
  return `${baseUrl}${utmParams ? `?${utmParams}` : ""}`
}
