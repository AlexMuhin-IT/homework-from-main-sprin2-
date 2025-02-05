import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from "react"
import s from "./SuperSelect.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: JSX.Element[] = options
    ? options.map((o) => (
        <option id={"hw7-option-" + o.id} className={s.option} key={o.id} value={o.id}>
          {o.value}
        </option>
      ))
    : []

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    const valueId = +value
    onChangeOption && onChangeOption(valueId)
    onChange?.(e)
  }

  const finalSelectClassName = s.select + (className ? " " + className : "")

  return (
    <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
