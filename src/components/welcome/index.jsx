import './style.css'
// import loadingGif from '../../assets/loading-gif.gif'
import welcomeIllustration from '../../assets/welcome-illustration.svg'

const Welcome = () => {
	return (
		<div className='Welcome'>
			<img src={welcomeIllustration} alt='' />
			<div className='Welcome__title'>
				<span style={{color: 'green'}}>simple</span>
				<span style={{color: 'rgb(255, 85, 0)', fontSize: '30px'}}>Plan</span>
			</div>
			{/* <img className='Welcome__loading' src={loadingGif} /> */}
		</div>
	)
}

export default Welcome
