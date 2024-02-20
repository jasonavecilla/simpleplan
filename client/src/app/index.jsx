// import Counter from '../components/counter-example/index'
import './style.css'
import Home from '../components/home/index'
import Welcome from './../components/welcome/index'
import {useState} from 'react'

function App() {
	const [timer, setTimer] = useState(0)
	// console.log('timeout is : ' + timer)

	function handleSetTimer() {
		setTimer(2)
	}

	setTimeout(() => {
		handleSetTimer()
		// console.log('timeout is now: ' + timer)
	}, 2000)
	return (
		<>
			{/* <Counter initialCount={0} /> */}
			{timer === 0 && <Welcome />}
			<Home />
		</>
	)
}

export default App
