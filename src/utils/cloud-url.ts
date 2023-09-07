import { cloudUrl } from "../config/customFields"

export const getCloudUrl = (
  utmSource: string,
  utmContent: string,
  utmCampaign: string,
) => {
  const params = {
    utm_source: utmSource,
    utm_content: utmContent,
    utm_campaign: utmCampaign,
  }

  // Join k=v pairs of params
  // but only if v is defined
  const joined = Object.entries(params)
    .reduce<string[]>(
      (acc, [key, value]) =>
        value !== undefined ? acc.concat(`${key}=${value}`) : acc,
      [],
    )
    .join("&")

  return `${cloudUrl}?${joined}`
}
