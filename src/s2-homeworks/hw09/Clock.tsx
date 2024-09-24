import React, {
  useState,
} from "react"
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton"
import { restoreState } from "../hw06/localStorage/localStorage"
import s from "./Clock.module.css"

function Clock() {
  const [
    timerId,
    setTimerId,
  ] = useState<
    | number
    | undefined
  >(undefined)
  const [
    date,
    setDate,
  ] =
    useState<Date>(
      new Date(
        restoreState(
          "hw9-date",
          Date.now(),
        ),
      ),
    )
  const [
    show,
    setShow,
  ] =
    useState<boolean>(
      false,
    )

  const [
    disable,
    setDisable,
  ] =
    useState<boolean>(
      false,
    ) // ????

  const start =
    () => {
      // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

      stop()
      setDisable(
        !disable,
      )
      const id: number =
        window.setInterval(
          () => {
            setDate(
              new Date(),
            )
            setTimerId(
              id,
            )
          },
          1000,
        )
    }

  const stop =
    () => {
      clearInterval(
        timerId,
      )
      setDisable(
        !disable,
      )
    }

  const onMouseEnter =
    () => {
      setShow(true)
    }
  const onMouseLeave =
    () => {
      setShow(false)
    }
  let formatterTime =
    new Intl.DateTimeFormat(
      "ru",
      {
        hour: "numeric",
        minute:
          "numeric",
        second:
          "numeric",
      },
    )
  let currentTime =
    formatterTime.format(
      date,
    )

  let formatterDate =
    new Intl.DateTimeFormat(
      "ru",
    )
  let currentDate =
    formatterDate.format(
      date,
    )

  let formatterMonth =
    new Intl.DateTimeFormat(
      "en-US",
      {
        month:
          "long",
      },
    )
  let currentMonth =
    formatterMonth.format(
      date,
    )

  let formatterDay =
    new Intl.DateTimeFormat(
      "en-US",
      {
        weekday:
          "long",
      },
    )
  let currentDay =
    formatterDay.format(
      date,
    )

  const stringTime =
    currentTime || (
      <br />
    ) // часы24:минуты:секунды (24:00:00)
  const stringDate =
    currentDate || (
      <br />
    ) // день.месяц.год (01.02.2022)

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay =
    currentDay || (
      <br />
    )
  const stringMonth =
    currentMonth || (
      <br />
    )

  return (
    <div
      className={
        s.clock
      }
    >
      <div
        id={
          "hw9-watch"
        }
        className={
          s.watch
        }
        onMouseEnter={
          onMouseEnter
        }
        onMouseLeave={
          onMouseLeave
        }
      >
        <span
          id={
            "hw9-day"
          }
        >
          {
            stringDay
          }
        </span>
        ,{" "}
        <span
          id={
            "hw9-time"
          }
        >
          <strong
            onBlur={(
              event,
            ) =>
              onMouseEnter()
            }
          >
            {
              stringTime
            }
          </strong>
        </span>
      </div>

      <div
        id={
          "hw9-more"
        }
      >
        <div
          className={
            s.more
          }
        >
          {show ? (
            <>
              <span
                id={
                  "hw9-month"
                }
              >
                {
                  stringMonth
                }
              </span>
              ,{" "}
              <span
                id={
                  "hw9-date"
                }
              >
                {
                  stringDate
                }
              </span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div
        className={
          s.buttonsContainer
        }
      >
        <SuperButton
          id={
            "hw9-button-start"
          }
          disabled={
            disable
          }
          onClick={
            start
          }
          xType={
            "default"
          }
        >
          start
        </SuperButton>
        <SuperButton
          id={
            "hw9-button-stop"
          }
          disabled={
            !disable
          }
          onClick={
            stop
          }
          xType={
            "default"
          }
        >
          stop
        </SuperButton>
      </div>
    </div>
  )
}

export default Clock
