import TaskList from '../../components/task-list'
import TaskCard from '../../components/task-card'
import Header from '../../components/header'
import {getDailyTask} from '../../util/data-manipulaation'
import data from '../../../data.json'

function DailyTasks() {
	const today = new Date()
	const taskList = getDailyTask(today, data)
	return (
		<>
			<Header title='Current Day' />
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
