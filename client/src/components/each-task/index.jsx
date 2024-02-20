import './style.css'
import trashsolid from '../../assets/trash-solid.svg'
import star from '../../assets/star-on.svg'
import starOff from '../../assets/star-off.svg'
import {useState} from 'react'

const EachTask = (props) => {
	const [more, setMore] = useState(1)
	function handleShowMore() {
		more === 0 ? setMore(1) : setMore(0)
	}
	const showMore = ['EachTask__detail-show', 'EachTask__detail-hide']

	// const [moreOption, setMoreOption] = useState(1)
	// function handleShowMore() {
	// 	moreOption === 0 ? setMoreOption(1) : setMoreOption(0)
	// }
	// const showMoreOption = ['EachTask__more-open', 'EachTask__more-close']
	return (
		<div className='EachTask'>
			<div className='EachTask__main'>
				<div className='EachTask__left'>
					<button
						onClick={props.changeCompletedStatus}
						className='EachTask__completed'
						value={props.thisTaskId}
					>
						{props.thisTask.completed === true ? '✅' : '🔲'}
					</button>
					<div className='EachTask__data'>
						{<p className='EachTask__name'>{props.thisTask.taskName}</p>}
						{props.thisTask.taskCategory && (
							<p className='EachTask__category'>
								{props.thisTask.taskCategory}
							</p>
						)}
					</div>
				</div>

				<div className='EachTask__more-open'>
					<div className='star-delete'>
						<button
							// STARRED
							onClick={props.changeStarredStatus}
							value={props.thisTaskId}
							className='EachTask__more-options star'
						>
							{props.thisTask.starred === true ? (
								`${(
									<img
										onClick={props.changeStarredStatus}
										value={props.thisTaskId}
										src={star}
									></img>
								)}`
							) : (
								<img
									onClick={props.changeStarredStatus}
									value={props.thisTaskId}
									src={starOff}
								></img>
							)}
						</button>
						<button
							// DELETE
							onClick={props.deleteTask}
							value={props.thisTaskId}
							className='EachTask__more-options delete'
						>
							<img src={trashsolid} alt='delete button' />
						</button>
					</div>
					<div
						// VIEW DESCRIPTION
						onClick={handleShowMore}
						value={props.thisTaskId}
						className='EachTask__more-options more'
					>
						{more === 0 ? 'Less' : 'More'}
					</div>
				</div>
			</div>
			<div className={showMore[more]}>
				{<p className='EachTask__task-desc'>{props.thisTask.taskDesc}</p>}
			</div>
		</div>
	)
}

export default EachTask
