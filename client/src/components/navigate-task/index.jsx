// import {useEffect} from 'react'
import './style.css'

const NavigateTask = (props) => {
	// console.log('inside Nav is' + props.moveSwitch)
	// useEffect(()=>{},[props.moveSwitch])
	return (
		<div className='NavigateTasks'>
			<div className='NavigateTasks__categories'>
				<p>Categories :</p>
				<span>Fun</span>
				<span>School</span>
				<span>Chores</span>
			</div>
			<div className='NavigateTasks__completion-section'>
				<p className='NavigateTasks__label-todo'>Todo |</p>
				<button
					className='NavigateTasks__completed'
					onClick={props.showCompletedTasks}
				>
					<div
						// {isCompleted===true? className='NavigateTasks__completed-switch-off' : className='NavigateTasks__completed-switch--on'}
						className={props.moveSwitch}
						// onClick={props.moveSwitch}
					></div>
				</button>
				<p className='NavigateTasks__label-done'>| Done</p>
			</div>
		</div>
	)
}

export default NavigateTask
