import TaskList from '../../components/task-list'
import TaskCard from '../../components/task-card'
import Header from '../../components/header'

const initialState = [
	{
		taskName: 'Update Recipes Project Backlog',
		activityName: 'Projects',
		taskDescription: "",
		categoryName: 'ROUTINE ACTIVITIES',
	},
	{
		taskName: 'Update The dailyTasks sheet with the backlog tasks',
		activityName: 'Projects',
		taskDescription: "add the filtering feature to Done",
		categoryName: 'ROUTINE ACTIVITIES',
	},
	{
		taskName: 'Publish The recent Blog Post Draft to hashnode',
		activityName: 'Blog Posts',
		taskDescription: "add the filtering feature to Done",
		categoryName: 'ROUTINE ACTIVITIES',
	},
	{
		taskName: 'Write a New headline in a Blog Post Draft',
		activityName: 'Blog Post',
		taskDescription: "add the filtering feature to Done",
		categoryName: 'STUDYING',
	},
]

function DailyTasks() {
	return (
		<>
		<Header title='Current Day'/>
			<TaskList>
				{initialState.map((task, i)=> (
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
