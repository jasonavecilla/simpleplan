// import {useEffect, useState} from 'react'
import './style.css'

const AddEdit = (props) => {
	const category = ['Fun', 'School', 'Chores']
	return (
		<div className='AddEdit'>
			<form className='AddEdit__form'>
				<h1>Add Task</h1>
				<textarea
					className='AddEdit__input AddEdit__input-typed'
					id='taskname'
					cols='30'
					rows='1'
					onChange={props.handleName}
					name='0'
					placeholder='Title'
				></textarea>
				<textarea
					className='AddEdit__input AddEdit__input-typed'
					id='taskdesc'
					cols='30'
					rows='3'
					onChange={props.handleDesc}
					name='1'
					placeholder='Description'
				></textarea>

				<div className='AddEdit__field'>
					<p className='AddEdit__title'>Category</p>
					<select
						id='category'
						className='AddEdit__input AddEdit__input-select'
						onChange={props.handleCategory}
						name='2'
					>
						{category.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
				</div>
				<div className='AddEdit__field'>
					<p className='AddEdit__title'>Start Date</p>
					<input
						type='date'
						className='AddEdit__input AddEdit__datetime-input'
						id='startDate'
						onChange={props.handleStartDate}
						name='3'
					/>
				</div>
				<div className='AddEdit__field'>
					<p className='AddEdit__title'>Due Date</p>
					<input
						type='date'
						className='AddEdit__input AddEdit__datetime-input'
						id='enddate'
						onChange={props.handleDueDate}
						name='4'
					/>
				</div>
			</form>
			{/* <div className='AddEdit__button'>
				<button className='AddEdit__save' onClick={handleSave}>
					SAVE
				</button>
			</div> */}
		</div>
	)
}

export default AddEdit

// const [data, updateData] = useState([category])
// let currData = ['', '', '', '', '']
// const handleChange = (event) => {
// 	currData[event.target.name] = event.target.value
// 	// console.log(currData)
// }

// const [taskName, setTaskName] = useState('')
// const [taskDesc, setTaskDesc] = useState('')
// const [taskCategory, setTaskCategory] = useState('')
// const [taskStartDate, setTaskStartDate] = useState('')
// const [taskDueDate, setTaskDueDate] = useState('')

// const handleName = (event) => {
// 	setTaskName(event.target.value)
// }
// const handleDesc = (event) => {
// 	setTaskDesc(event.target.value)
// }
// const handleCategory = (event) => {
// 	setTaskCategory(event.target.value)
// }
// const handleStartDate = (event) => {
// 	setTaskStartDate(event.target.value)
// }
// const handleDueDate = (event) => {
// 	setTaskDueDate(event.target.value)
// }

// const handleSave = () => {
// 	let dataToSave = [
// 		taskName,
// 		taskDesc,
// 		taskCategory,
// 		taskStartDate,
// 		taskDueDate,
// 	]
// 	data.push(...[dataToSave])
// 	console.log(data)
// }

// useEffect(() => {
// 	console.log('data is ' + data[0])
// }, [data])
