import React from 'react'
import HeadBlock from '../HeadBlock'
import imgLeft from '../../assets/img/material/left.png'
import imgRightTop from '../../assets/img/material/rightTop.png'
import imgRightBot from '../../assets/img/material/rightBot.png'

const index = () => {
	return (
		<div className='material section'>
			<div className='material__inner container'>
				<HeadBlock title='MATERIAL' className='left90' />
				<div className='material__inner-content'>
					<div className='material__inner-content-left'>
						<div className='material__inner-content-title title'>
							choice of materials for quality furniture.
						</div>
						<div className='material__inner-content-desc desc'>
							You can custom the material as desired. And our furniture uses the
							best materials and selected quality materials.
						</div>
						<button className='material__inner-content-btn white-link-border'>See Materials</button>
					</div>

					<div className='material__inner-content-right'>
						<div className='material__inner-content-right_left'>
							<img src={imgLeft} alt='img' />
						</div>
						<div className='material__inner-content-right_right'>
							<img src={imgRightTop} alt='img' />
							<img src={imgRightBot} alt='img' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
