import DisplayDate from '../display-date'
import './style.css'
// /**
//  * Functional component representing a header with a title and an info button.
//  *
//  * @component
//  *
//  * @param {Object} props - React component props.
//  * @param {string} props.title - The title of the header.
//  * @returns {JSX.Element} - Rendered Header component.
//  */
function Header(props) {
	return (
		<div className='Header'>
			{<DisplayDate />}
			<div className='Header__stats'>
				<span className='Header__stats-todo'>{props.taskStats}</span>
				<span> of </span>
				<span className='Header__stats-total'>{props.totalTasks}</span>
				<span>Tasks</span>
			</div>
		</div>
	)
}

export default Header
{
	/* <div>
				<p className='Header__stats'>
					<span className='Header__stats-todo'>{props.taskStats}</span>
					<span className> of </span>
					<span className='Header__stats-total'>{props.totalTasks}</span>
				</p>
				<p>Tasks</p>
			</div> */
}
