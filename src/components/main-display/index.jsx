// import DisplayDate from '../display-date'
import Header from '../header'
import './style.css'

const MainDisplay = (props) => {
	return (
		<div className='MainDisplay'>
			<Header taskStats={props.taskStats} totalTasks={props.totalTasks} />
			{/* {<NavigateTask showCompletedTasks={props.showCompletedTasks} />} */}
			{props.nav}
			{props.display}
		</div>
	)
}

export default MainDisplay
