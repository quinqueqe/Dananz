import React from 'react'
import LargeBlock from '../LargeBlock'
import img from '../../assets/img/heroServices/back.png'

const index = () => {
	return (
		<div className='heroServices section-page'>
			<div className='heroServices__inner container'>
				<div className='heroServices__inner-top'>
					<LargeBlock
						title='Services'
						desc='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
						width='width518'
					/>
				</div>
				<img src={img} alt='img' />
			</div>
		</div>
	)
}

export default index
