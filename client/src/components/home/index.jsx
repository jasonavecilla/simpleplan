import './style.css'
import AddEdit from '../add-edit'
import {useEffect, useState} from 'react'
import MainDisplay from '../main-display'
import EachTask from '../each-task'
import NavigateTask from '../navigate-task'
import info from '../../assets/info.svg'
import trash from '../../assets/trash.svg'
import cancelCircle from '../../assets/cancel-circle.svg'
import yesCircle from '../../assets/yes-circle.svg'
import warningTriangle from '../../assets/warning-triangle.svg'

const Home = () => {
	const [data, updateData] = useState(JSON.parse(initiateTaskList()))
	const [showAddEdit, setShowAddEdit] = useState(false)
	const [deleteAllTasks, setDeleteAllTasks] = useState(false)
	const [showInfo, setShowInfo] = useState(false)
	const [confirmDeleteAll, setConfirmDeleteAll] = useState(false)

	const findLastId = () => {
		let thisId = 0
		if (data.length > 0) {
			thisId = data[data.length - 1].taskId
			// console.log(thisId)
		} else {
			// console.log('the else thisID: ' + thisId)
		}
		return thisId
		// try {
		// 	thisId = data[data.length - 1].taskId
		// 	console.log(thisId)
		// } catch {
		// 	thisId
		// }
		// return thisId
	}

	const [taskName, setTaskName] = useState('')
	const [taskDesc, setTaskDesc] = useState('')
	const [taskCategory, setTaskCategory] = useState('')
	// const [taskStartDate, setTaskStartDate] = useState('')
	// const [taskDueDate, setTaskDueDate] = useState('')
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
	// const handleStartDate = (event) => {
	// 	setTaskStartDate(event.target.value)
	// }
	// const handleDueDate = (event) => {
	// 	setTaskDueDate(event.target.value)
	// }

	const handleTaskId = () => {
		setTaskId(findLastId() + 1)
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
		// setTaskStartDate('')
		// setTaskDueDate('')
		// setTaskId(0)
	}

	const handleSave = () => {
		if (taskName !== '') {
			handleTaskId()
			console.log('after save call: ' + taskId)
			let dataToSave = {
				taskName: taskName,
				taskDesc: taskDesc,
				taskCategory: taskCategory,
				// taskStartDate: taskStartDate,
				// taskDueDate: taskDueDate,
				completed: false,
				taskId: taskId + 1,
			}
			updateData([...data, dataToSave])
			console.log('update data is: ' + data)
			setShowAddEdit(false)
			resetInputData()
			setshowCompleted(false)
		} else {
			alert('insert task Title')
		}
	}
	useEffect(() => {
		// console.log(data)
		localStorage.setItem('listless', JSON.stringify(data))
	}, [data.length])

	// useEffect(() => {
	// 	// console.log(data)
	// 	localStorage.clear('listless')
	// }, [confirmDeleteAll])

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
		console.log('check is: ' + check)
		const deleteIndex = pHData.findIndex((obj) => obj.taskId === check)
		console.log('delete index: ' + deleteIndex)
		pHData.splice(deleteIndex, 1)
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
				display={data
					.filter(checkCompleted)
					.map((item) => (
						<EachTask
							thisTask={item}
							key={item.taskId}
							thisTaskId={item.taskId}
							changeCompletedStatus={handleTaskCompletion}
							deleteTask={handleTaskDelete}
						/>
					))
					.reverse()}
			/>
			{showAddEdit && <div className='Home__blurry'></div>}

			{showAddEdit && (
				<div className='Home__fixed-items'>
					{showAddEdit && (
						<AddEdit
							handleName={handleName}
							handleDesc={handleDesc}
							handleCategory={handleCategory}
							// handleStartDate={handleStartDate}
							// handleDueDate={handleDueDate}
						/>
					)}
					{showAddEdit && (
						<img
							onClick={() => {
								setShowAddEdit(false)
							}}
							className='AddEdit__cancel'
							src={cancelCircle}
						/>
					)}
					{showAddEdit && (
						<div className='AddEdit__button'>
							<button className='AddEdit__save' onClick={handleSave}>
								SAVE
							</button>
						</div>
					)}
				</div>
			)}

			{/* NAVIGATION BAR */}
			{deleteAllTasks && <div className='Home__blurry'></div>}
			{showInfo && <div className='Home__blurry'></div>}

			{showAddEdit || (
				<div className='Home__navigation'>
					{/* INFO SECTION */}
					<div>
						{
							// deleteAllTasks || (
							<img
								onClick={() => setShowInfo(true)}
								className='Home__about Home_icon'
								src={info}
							/>
							// )
						}

						{showInfo && (
							<>
								<div className='Home__show-info'>
									<img
										src={cancelCircle}
										onClick={() => {
											setShowInfo(false)
										}}
										alt='close delete all prompt'
										className='Home__close-button'
									/>
									<img src={info} alt='info icon' />
									<p>This is a great app to manage your tasks</p>
								</div>
							</>
						)}
					</div>

					{/* ADD TASK SECTION */}
					<button
						onClick={() => {
							setShowAddEdit(true)
						}}
						className='Home__add-edit'
					>
						ADD TASK
					</button>

					{/* DELETE ALL SECTION */}
					{/* const [deleteAllTasks, setDeleteAllTasks] = useState(false) */}
					<div>
						{
							<img
								onClick={() => {
									// setShowAddEdit(true)
									setDeleteAllTasks(true)
								}}
								className='Home__about Home_icon'
								src={trash}
							/>
						}

						{deleteAllTasks && (
							<>
								<div className='Home__delete-all-warning'>
									<img
										src={cancelCircle}
										onClick={() => setDeleteAllTasks(false)}
										alt='close delete all prompt'
										className='Home__close-button'
									/>
									<img src={warningTriangle} alt='warning triangle' />
									<p>Are you sure you want to delete all tasks?</p>
									<img
										src={yesCircle}
										onClick={() => {
											setDeleteAllTasks(false)
											setConfirmDeleteAll(true)
											updateData([])
											localStorage.clear('listless')
										}}
										alt='confirm delete all button'
									/>
								</div>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default Home
