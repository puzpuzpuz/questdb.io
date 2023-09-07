export function toPlausibleClassname(...hooks: string[]): string {
  const tokens = hooks.map((hook) => hook.replace(/ /g, "+"))
  return `plausible-event-name=${tokens.join("+")}`
}
