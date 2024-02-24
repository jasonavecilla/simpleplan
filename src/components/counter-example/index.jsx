import {useState} from 'react'
import './style.css'
/**
 * Functional component representing a simple counter.
 *
 * @component
 * @example
 * // Example usage of Counter component
 * <Counter initialCount={0} />
 *
 * @param {Object} props - React component props.
 * @param {number} props.initialCount - Initial count value.
 * @returns {JSX.Element} - Rendered Counter component.
 */
function Counter({initialCount}) {
	const [count, setCount] = useState(initialCount)

	/**
	 * Callbacks for handling counter operations.
	 *
	 * @namespace
	 * @property {Function} handleIncrement - Increments the counter.
	 * @property {Function} handleDecrement - Decrements the counter.
	 */
	const callbacks = {
		handleIncrement() {
			setCount((prevCount) => prevCount + 1)
		},
		handleDecrement() {
			setCount((prevCount) => prevCount - 1)
		},
	}

	return (
		<div className='Counter'>
			<p className='Counter__text'>Count: {count}</p>
			<button className='Counter__text' onClick={callbacks.handleIncrement}>
				Increment
			</button>
			<button
				className='Counter__button Counter__button-disabled'
				onClick={callbacks.handleDecrement}
			>
				Decrement
			</button>
		</div>
	)
}

export default Counter
