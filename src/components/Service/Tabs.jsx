import React from 'react'
import arrow from '../../assets/img/service/arrow-right.png'

const Tabs = ({ number, title, width, gap }) => {
	const [activeTab, setActiveTab] = React.useState(false)

	return (
		<li className='service__inner-tabs-tab'>
			<div className='service__inner-tabs-tab-left'>
				<div className={`service__inner-tabs-tab-left-top ${gap}`}>
					<p>{number}</p>
					<h6>{title}</h6>
				</div>
				<div className='service__inner-tabs-tab-left-bot'>
					<p className={activeTab ? `desc ${width}` : 'desc none'}>
						the use of simple and limited elements to get the best effect or
						impression.
					</p>
				</div>
			</div>

			<button
				className={activeTab ? 'service-btn-active' : 'service-btn'}
				onClick={() => setActiveTab(!activeTab)}
			>
				<img src={arrow} alt='img' />
			</button>
		</li>
	)
}

export default Tabs
