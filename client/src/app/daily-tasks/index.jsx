import TaskList from '../../components/task-list'
import TaskCard from '../../components/task-card'
import Header from '../../components/header'
import {useDispatch, useSelector} from 'react-redux'
import actions from '../../redux/actions'
import {useEffect, useState} from 'react'
import {isToday} from '../../util/data-manipulation'
import Navigation from '../../components/navigation'

function DailyTasks() {
	const dispatch = useDispatch()
	const taskList = useSelector((store) => store.data) || []
	const [date, setDate] = useState(new Date())
	const dateContent = new Intl.DateTimeFormat('en-US').format(date)
	const isCurrentDay = isToday(date)
	const isEmpty = localStorage.getItem('taskList') ? false : true

	useEffect(() => {
		// Dispatch the action to load tasks when the component mounts
		dispatch(actions.loadTasks(date))
	}, [dispatch, date])

	/**
 * Callback functions for handling date switching and running an example template.
 *
 * @typedef {Object} callbacks
 *
 * @property {Function} switchDate - Function to switch the date based on the provided number of days.
 * @param {number} number - The number of days to switch the date. Positive values move forward, and negative values move backward.
 *
 * @property {Function} runTemplate - Function to to seed localStorage "taskList" from provided data.json.
 * @returns {Object} - The action object dispatched by the `initProject` action creator.
 *

 */

	const callbacks = {
		switchDate: (number) => {
			setDate((prev) => {
				const newDate = new Date(prev)
				newDate.setDate(prev.getDate() + number)
				return newDate
			})
		},
		runTemplate: () => {
			return dispatch(actions.initProject())
		},
	}
	return (
		<>
			<Header title={isCurrentDay ? 'Current Day' : dateContent} />
			<Navigation
				runTemplate={callbacks.runTemplate}
				switchDate={callbacks.switchDate}
				isEmpty={isEmpty}
			/>
			<TaskList>
				{taskList.map((task, i) => (
					<TaskCard
						key={i}
						taskName={task.taskName}
						activityName={task.activityName}
						taskDescription={task.taskDescription}
						categoryName={task.categoryName}
					/>
				))}
			</TaskList>
		</>
	)
}

export default DailyTasks
