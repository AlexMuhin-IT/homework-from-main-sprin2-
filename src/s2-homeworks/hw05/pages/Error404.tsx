import React from "react"
import s from "./Error404.module.css"
import error404 from "./404.svg"
import { NavLink } from "react-router-dom"
import { PATH } from "../Pages"

const Error404 = () => {
  return (
    <NavLink to={PATH.ERROR404} id={"hw5-page-404"}>
      <div className={s.wrapper}>
        <img src={error404} alt={"404"} className={s.error404} />
      </div>
    </NavLink>
  )
}

export default Error404
