import clsx from "clsx"
import React from "react"
import style from "./styles.module.css"

type Props<T = string> = {
  value: T
  onChange: (value: T) => void
  values: Array<{ label: string; value: T; disabled?: boolean }>
  className?: string
}

export const Dropdown = <T,>({
  value,
  onChange,
  values,
  className,
}: Props<T>) => (
  <div className={clsx(style.root, className)}>
    <select
      defaultValue={value as unknown as string}
      onChange={({ target: { value } }) => onChange(value as unknown as T)}
    >
      {values.map(({ label, value, disabled }) => (
        <option
          key={value as unknown as string}
          value={value as unknown as string}
          disabled={disabled}
        >
          {label}
        </option>
      ))}
    </select>
    <div className={style.view}>
      {values.find(({ value: needle }) => needle === value)?.label ?? value}
    </div>
  </div>
)
