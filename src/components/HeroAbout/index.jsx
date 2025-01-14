import React from 'react'
import LargeBlock from '../LargeBlock'
import img from '../../assets/img/heroAbout/back.png'

const index = () => {
	return (
		<div className='heroAbout section-page'>
			<div className='heroAbout__inner container'>
				<div className='heroAbout__inner-top'>
					<LargeBlock
						title='About'
						desc='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
						width='width582'
					/>
				</div>
				<div className='heroAbout__inner-bot'>
					<img src={img} alt='img' />
				</div>
			</div>
		</div>
	)
}

export default index
