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
			<p className='Header__stats'>
				<span>{props.taskStats}</span>
				<span> of </span>
				<span>{props.totalTasks}</span>
			</p>
		</div>
	)
}

export default Header
