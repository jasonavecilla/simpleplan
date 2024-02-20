import './style.css'
import AddEdit from '../add-edit'
import {useEffect, useState} from 'react'
import MainDisplay from '../main-display'
import EachTask from '../each-task'
import NavigateTask from '../navigate-task'

const Home = () => {
	const [data, updateData] = useState(JSON.parse(initiateTaskList()))
	const [showStatus, setShowStatus] = useState(false)

	const findLastId = () => {
		let thisId = 0
		try {
			thisId = data[data.length - 1].taskId
			console.log(thisId)
		} catch {
			thisId
		}
		return thisId
	}

	const [taskName, setTaskName] = useState('')
	const [taskDesc, setTaskDesc] = useState('')
	const [taskCategory, setTaskCategory] = useState('')
	const [taskStartDate, setTaskStartDate] = useState('')
	const [taskDueDate, setTaskDueDate] = useState('')
	const [taskId, setTaskId] = useState(findLastId())

	const [showCompleted, setshowCompleted] = useState(false)

	const handleName = (event) => {
		setTaskName(event.target.value)
	}
	const handleDesc = (event) => {
		setTaskDesc(event.target.value)
	}
	const handleCategory = (event) => {
		setTaskCategory(event.target.value)
	}
	const handleStartDate = (event) => {
		setTaskStartDate(event.target.value)
	}
	const handleDueDate = (event) => {
		setTaskDueDate(event.target.value)
	}

	const handleTaskId = () => {
		setTaskId((taskId) => taskId + 1)
		console.log('task Id upon Call' + taskId)
	}

	function initiateTaskList() {
		// localStorage.clear('listless')
		return localStorage.getItem('listless')
			? localStorage.getItem('listless')
			: setGet()
	}

	function setGet() {
		localStorage.setItem('listless', JSON.stringify([]))
		return localStorage.getItem('listless')
	}

	const resetInputData = () => {
		setTaskName('')
		setTaskCategory('')
		setTaskDesc('')
		setTaskStartDate('')
		setTaskDueDate('')
		// setTaskId(0)
	}

	const handleSave = () => {
		if (taskName !== '') {
			handleTaskId()
			console.log(taskId)
			let dataToSave = {
				taskName: taskName,
				taskDesc: taskDesc,
				taskCategory: taskCategory,
				taskStartDate: taskStartDate,
				taskDueDate: taskDueDate,
				completed: false,
				taskId: taskId,
			}
			// data.push([...[dataToSave]])
			updateData([...data, dataToSave])
			localStorage.setItem('listless', JSON.stringify(data))
			setShowStatus(false)
			resetInputData()
		} else {
			alert('insert task Title')
		}
	}
	useEffect(() => {
		console.log(data)
	}, [data])

	function handleTaskCompletion(event) {
		let pHData = data
		const check = Number(event.target.value)
		const completionIndex = pHData.findIndex((obj) => obj.taskId === check)
		pHData[completionIndex].completed = !pHData[completionIndex].completed
		updateData([...pHData])
		localStorage.setItem('listless', JSON.stringify(data))
	}

	function handleTaskDelete(event) {
		let pHData = data
		const check = Number(event.target.value)
		const completionIndex = pHData.findIndex((obj) => obj.taskId === check)
		pHData.splice(completionIndex, 1)
		updateData([...pHData])
		localStorage.setItem('listless', JSON.stringify(data))
	}

	function handleShowCompletedTask() {
		setshowCompleted(!showCompleted)
		return showCompleted
	}

	function checkCompleted(completed) {
		return completed.completed === showCompleted
	}
	function notCompleted(completed) {
		return completed.completed === false
	}
	function countCompleted() {
		return data.filter(notCompleted).length
	}

	function handleMoveSwitch() {
		let SliderClassName = ''
		showCompleted === true
			? (SliderClassName = 'NavigateTasks__completed-switch-on')
			: (SliderClassName = 'NavigateTasks__completed-switch-off')
		return SliderClassName
	}

	return (
		<div className='Home'>
			<MainDisplay
				taskStats={countCompleted()}
				totalTasks={data.length}
				nav={
					<NavigateTask
						showCompletedTasks={handleShowCompletedTask}
						moveSwitch={handleMoveSwitch()}
					/>
				}
				display={data.filter(checkCompleted).map((item) => (
					<EachTask
						thisTask={item}
						key={item.taskId}
						thisTaskId={item.taskId}
						changeCompletedStatus={handleTaskCompletion}
						deleteTask={handleTaskDelete}
					/>
				))}
			/>

			{showStatus && (
				<div className='Home__fixed-items'>
					{showStatus && <button className='Home__blurry'></button>}

					{showStatus && (
						<AddEdit
							handleName={handleName}
							handleDesc={handleDesc}
							handleCategory={handleCategory}
							handleStartDate={handleStartDate}
							handleDueDate={handleDueDate}
						/>
					)}
					{showStatus && (
						<button
							onClick={() => {
								setShowStatus(false)
							}}
							className='AddEdit__cancel'
						>
							X
						</button>
					)}
					{showStatus && (
						<div className='AddEdit__button'>
							<button className='AddEdit__save' onClick={handleSave}>
								SAVE
							</button>
						</div>
					)}
				</div>
			)}

			{showStatus || (
				<button
					onClick={() => {
						setShowStatus(true)
					}}
					className='AddEdit__show'
				>
					ADD
				</button>
			)}
		</div>
	)
}

export default Home
