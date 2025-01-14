import React from 'react'
import selectImg from '../../assets/img/contactUsForm/arrow.svg'

const Inner = () => {
	const selectDb = ['RU', 'US', 'BR']
	const [activeSelet, setActiveSelect] = React.useState(1)
	const [openList, setOpenList] = React.useState(false)
	return (
		<>
			<div className='contactUsForm__inner-top'>
				<div className='contactUsForm__inner-top-left'>
					<p>First Name</p>
					<input type='name' placeholder='First Name' />
				</div>
				<div className='contactUsForm__inner-top-right'>
					<p>Last Name</p>
					<input type='name' placeholder='Last Name' />
				</div>
			</div>
			<div className='contactUsForm__inner-center'>
				<div className='contactUsForm__inner-center-top'>
					<p>Email</p>
					<input type='email' placeholder='Email' />
				</div>
				<div className='contactUsForm__inner-center-center contactUs__inner-tel'>
					<p>Phone Number</p>
					<input type='tel' placeholder='First Name' />

					<div className='contactUs__select'>
						<div className='contactUs__select-inner'>
							<p className='pb0'>{selectDb[activeSelet]}</p>
							<button className={openList ? 'contactUs__select-inner-btn-active' : ''} onClick={() => setOpenList(!openList)}>
								<img src={selectImg} alt='img' />
							</button>
						</div>
						<div
							className={
								openList
									? 'contactUs__select-back-true'
									: 'contactUs__select-back-false'
							}
						>
							{selectDb.map((item, i) => (
								<p
									className='pb0'
									onClick={() => {
										setOpenList(!openList)
										setActiveSelect(i)
									}}
									key={i}
								>
									{item}
								</p>
							))}
						</div>
					</div>
				</div>
				<div className='contactUsForm__inner-center-bot'>
					<p>Message</p>
					<input type='text' placeholder='Your Message' />
				</div>
			</div>
			<div className='contactUsForm__inner-bot'>
				<button className='blue-link'>Send Massage</button>
			</div>
		</>
	)
}

export default Inner
