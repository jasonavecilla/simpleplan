import './style.css'
/**
 * Functional component representing a header with a title and an info button.
 *
 * @component
 *
 * @param {Object} props - React component props.
 * @param {string} props.title - The title of the header.
 * @returns {JSX.Element} - Rendered Header component.
 */
function Header({title}) {

	return (
		<div className='Header'>
			<h1 className='Header__title'>{title}</h1>
			<button className='Header__btn'>Info</button>
		</div>
	)
}

export default Header
