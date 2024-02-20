// import {useState} from 'react'
import './style.css'

const DisplayDate = () => {
	const weekdays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	const today = new Date()

	return (
		<div className='DisplayDate'>
			<p>{weekdays[today.getDay()]}</p>
			<p>
				{today.getDate()} {months[today.getMonth()]}
			</p>
		</div>
	)
}

export default DisplayDate
