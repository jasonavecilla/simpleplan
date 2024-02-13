import './style.css'
import AddEdit from '../add-edit'
import {useEffect, useState} from 'react'
import DisplayTasks from '../display-tasks'
// import HomeButtons from '../home-buttons'

const Home = () => {
	const [data, updateData] = useState([])
	const [showStatus, setShowStatus] = useState(false)
	// const [saved, setUpdateSaved] = useState(false)

	const [taskName, setTaskName] = useState('')
	const [taskDesc, setTaskDesc] = useState('')
	const [taskCategory, setTaskCategory] = useState('')
	const [taskStartDate, setTaskStartDate] = useState('')
	const [taskDueDate, setTaskDueDate] = useState('')

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

	const resetData = () => {
		setTaskName('')
		setTaskCategory('')
		setTaskDesc('')
		setTaskStartDate('')
		setTaskDueDate('')
	}

	const handleSave = () => {
		if (taskName !== '') {
			let dataToSave = [
				taskName,
				taskDesc,
				taskCategory,
				taskStartDate,
				taskDueDate,
			]
			data.push(...[dataToSave])
			console.log(data)
			setShowStatus(false)
			resetData()
		} else {
			alert('insert task Title')
		}
		// setUpdateSaved(true)
	}
	useEffect(() => {
		console.log('EFFECT: ' + data.length)
	}, [data.length])

	return (
		<div className='Home'>
			<DisplayTasks tasks={data} />
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
					{/* how do i manipulate the button in the addEdit to close or open: done*/}
					{showStatus && (
						<div className='AddEdit__button'>
							<button className='AddEdit__save' onClick={handleSave}>
								SAVE
							</button>
						</div>
					)}
					{/* {saved && <HomeButtons name='ITEM SAVED' />} */}
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
