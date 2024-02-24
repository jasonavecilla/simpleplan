// import Row from '../row'
// import './style.css'
// /**
//  * Functional component representing a navigation header with buttons for date switching and template execution.
//  *
//  * @component
//  *
//  * @param {Object} props - React component props.
//  * @param {boolean} props.isEmpty - Indicates whether the localStorage taskList is empty.
//  * @param {Function} props.switchDate - Function to switch the date.
//  * @param {Function} props.runTemplate - Function to run the example template.
//  * @returns {JSX.Element} - Rendered Navigation component.
//  *
//  */
// function Navigation(props) {
// 	return (
// 		<Row justifying='space-between'>
// 			<button className='Navigation__btn' onClick={() => props.switchDate(-1)}>Previous day</button>
// 			{props.isEmpty && <button className='Navigation__btn' onClick={props.runTemplate}>Run the example</button>}
// 			<button className='Navigation__btn' onClick={() => props.switchDate(+1)}>The next day</button>
// 		</Row>
// 	)
// }

// export default Navigation
