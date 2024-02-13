import {useEffect, useState} from 'react'
import './style.css'

const DisplayTasks = (props) => {
	let allTasks = props.tasks
	// const handleTaskIndexDesc = (index) => {
	// 	console.log('index is : ' + index)
	// }

	const [taskClick, onTaskClick] = useState(false)
	const handleTaskClick = (event) => {
		onTaskClick(true)
	}

	const handleTaskUnhover = () => {
		onTaskClick(false)
		console.log('why')
	}

	useEffect(() => {
		alert('noww')
	}, taskClick)

	return (
		<div className='DisplayTasks'>
			<div className='DisplayTasks__date'>
				<h1 style={{fontSize: '40px'}}>
					<p style={{fontSize: '50px'}}>Tuesday</p>
					<p>23 January</p>
				</h1>
			</div>
			<div className='DisplayTasks__navigate'>
				<div>
					<span>Fun</span>
					<span>School</span>
					<span>Chores</span>
				</div>
				<div className='DisplayTasks__change-date'>
					<div>⏪</div>
					<p> Today </p>
					<div>⏩</div>
				</div>
			</div>

			{allTasks.map((item) => (
				<div
					key={item}
					className='DisplayTasks__task'
					onDoubleClick={handleTaskClick}
					onClick={handleTaskUnhover}
				>
					<div>
						{<p className='DisplayTasks__task-name'>{item[0]}</p>}
						{<p className='DisplayTasks__task-category'>{item[2]}</p>}
						{taskClick && <p>{item[1]}</p>}
					</div>
					<div></div>
				</div>
			))}
		</div>
	)
}

export default DisplayTasks
