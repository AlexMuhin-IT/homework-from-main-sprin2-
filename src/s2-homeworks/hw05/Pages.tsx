import React from "react"
import {
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom"
import Error404 from "./pages/Error404"
import PreJunior from "./pages/PreJunior"
import Junior from "./pages/Junior"
import JuniorPlus from "./pages/JuniorPlus"

export const PATH =
  {
    PRE_JUNIOR:
      "/pre-junior",
    JUNIOR:
      "/junior",
    JUNIOR_PLUS:
      "/junior-plus",
    ERROR404:
      "/error404",
  }

function Pages() {
  return (
    <div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                to={
                  PATH.PRE_JUNIOR
                }
              />
            }
          />

          <Route
            path={
              PATH.PRE_JUNIOR
            }
            element={
              <PreJunior />
            }
          />
          <Route
            path={
              PATH.JUNIOR
            }
            element={
              <Junior />
            }
          />
          <Route
            path={
              PATH.JUNIOR_PLUS
            }
            element={
              <JuniorPlus />
            }
          />

          <Route
            path="*"
            element={
              <Error404 />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default Pages
