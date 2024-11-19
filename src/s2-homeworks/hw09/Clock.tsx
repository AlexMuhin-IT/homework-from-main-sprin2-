import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'
import {format} from "node:url";

function Clock() {
	const [timerId, setTimerId] = useState<number | undefined>(undefined)
	// for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
	const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
	const [show, setShow] = useState<boolean>(false)

	const [disable, setDisable] = useState<boolean>(false) // ????
	// правильно ли создать новый стать?! или объясните пожалуйста

	const start = () => {
		// пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
		// сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
		// setShow(true)
		stop()
		setDisable(!disable)
		const id: number = window.setInterval(() => {

			setDate(new Date())
			setTimerId(id)
		}, 1000)
		// setShow(true)
		// setTimerId(id)
	}

	const stop = () => {
		// пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
		clearInterval(timerId)
		// setShow(!show)
		setDisable(!disable)
	}

	const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
		setShow(true)
	}
	const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
		setShow(false)
	}
	let formatterTime = new Intl.DateTimeFormat("ru", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	});
	let currentTime = formatterTime.format(date);

	let formatterDate = new Intl.DateTimeFormat("ru");
	let currentDate = formatterDate.format(date)

	let formatterMonth = new Intl.DateTimeFormat("en-US", {month: "long",});
	let currentMonth = formatterMonth.format(date)

	let formatterDay = new Intl.DateTimeFormat("en-US", {weekday: "long"});
	let currentDay = formatterDay.format(date)

	const stringTime = currentTime || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
	const stringDate = currentDate || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

	// день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
	const stringDay = currentDay || <br/> // пишут студенты
	const stringMonth = currentMonth || <br/> // пишут студенты

	return (
		<div className={s.clock}>
			<div
				id={'hw9-watch'}
				className={s.watch}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<span id={'hw9-day'}>{stringDay}</span>,{' '}
				<span id={'hw9-time'}>
                    <strong onBlur={event => onMouseEnter()}>{stringTime}</strong>
                </span>
			</div>

			<div id={'hw9-more'}>
				<div className={s.more}>
					{show ? (
						<>
							<span id={'hw9-month'}>{stringMonth}</span>,{' '}
							<span id={'hw9-date'}>{stringDate}</span>
						</>
					) : (
						<>
							<br/>
						</>
					)}
				</div>
			</div>

			<div className={s.buttonsContainer}>
				<SuperButton
					id={'hw9-button-start'}
					disabled={disable} // пишут студенты // задизэйблить если таймер запущен
					onClick={start}
					xType={'default'}

				>
					start
				</SuperButton>
				<SuperButton
					id={'hw9-button-stop'}
					disabled={!disable} // пишут студенты // задизэйблить если таймер не запущен
					onClick={stop}
					xType={'default'}

				>
					stop
				</SuperButton>
			</div>
		</div>
	)
}

export default Clock
