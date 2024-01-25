import './style.css'
/**
 * Functional component representing a daily task list.
 *
 * @component
 *
 * @param {Object} props - React component props.
 * @param {ReactNode} props.children - Child components representing tasks.
 * @returns {JSX.Element} - Rendered DailyTaskList component
 */
function TaskList({children}) {
	return <div className='DailyTaskList'>{children}</div>
}

export default TaskList
