import './style.css'
import trashsolid from '../../assets/trash-solid.svg'
// import star from '../../assets/star-on.svg'
// import starOff from '../../assets/star-off.svg'
import {useState} from 'react'

const EachTask = (props) => {
	const [more, setMore] = useState(1)
	function handleShowMore() {
		more === 0 ? setMore(1) : setMore(0)
	}
	const showMore = ['EachTask__detail-show', 'EachTask__detail-hide']

	const [showOption, setShowOption] = useState(1)
	const showMoreOption = ['EachTask__more-open', 'EachTask__more-close']
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

				<div className={showMoreOption[showOption]}>
					<button
						className='EachTask__clickForMore'
						onClick={() => {
							setShowOption(0)
						}}
						style={{fontSize: '40px', justifyContent: 'flex-end'}}
					>
						⁝
					</button>
					<div className='star-delete'>
						<div className='delete-more'>
							<button
								// DELETE
								className='EachTask__more-options delete'
								onClick={props.deleteTask}
								value={props.thisTaskId}
								style={{fontSize: '30px', color: 'red'}}
							>
								🗑
							</button>
							<div
								// VIEW DESCRIPTION
								onClick={handleShowMore}
								value={props.thisTaskId}
								className='EachTask__more-options more'
							>
								{more === 0 ? 'Less ⬆' : 'more ⬇'}
							</div>
						</div>

						{
							// CLOSE MORE
							<button
								className='EachTask__clickForMore'
								onClick={() => {
									setShowOption(1)
									setMore(1)
								}}
								style={{fontSize: '30px'}}
							>
								✖
							</button>
						}
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

{
	/* <button
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
						</button> */
}
