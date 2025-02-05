import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react"
import s from "./SuperButton.module.css"

type DefaultButtonPropsType =
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >

type SuperButtonPropsType =
  DefaultButtonPropsType & {
    xType?: string
  }

const SuperButton: React.FC<
  SuperButtonPropsType
> = ({
  xType,
  className,
  disabled,
  ...restProps
}) => {
  const finalClassName = `${s.button} + 
    ${xType === "default" ? s.default : ""}
    ${disabled ? s.disabled + s.action : ""}
    ${xType === "red" ? s.red : ""}
    ${className ? " " + className : ""}
    ${xType === "secondary" ? s.secondary : ""}`

  return (
    <button
      disabled={
        disabled
      }
      className={
        finalClassName
      }
      {...restProps}
    >
      {
        restProps.children
      }
    </button>
  )
}

export default SuperButton
