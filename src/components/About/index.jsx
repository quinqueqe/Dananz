import React from 'react'
import HeadBlock from '../HeadBlock'
import img from '../../assets/img/about/img.png'
import human from '../../assets/img/about/human.png'

const index = () => {
	return (
		<div className='about section'>
			<div className='about__inner container'>
				<HeadBlock title='ABOUT' />
				<h3 className='about__inner-title title'>
					“We're one of the best furniture agency. Prioritizing customers and
					making purchases easy are the hallmarks of our agency.”
				</h3>
				<div className='about__inner-content'>
					<div className='about__inner-left'>
						<img src={img} alt='img' />
					</div>
					<div className='about__inner-right'>
						<p className='about__inner-right-desc desc'>
							Online learning with us does not interfere with your daily life.
							because learning can be done anytime and anywhere.
						</p>
						<button className='about__inner-right-btn blue-link'>
							Learn More
						</button>
					</div>
					<div className='about__inner-subscribe'>
						<div className='about__inner-subscribe-left'>
							<img src={human} alt='img' />
						</div>
						<div className='about__inner-subscribe-right'>
							<h5>Arga Danaan</h5>
							<p>CEO of Dananz</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
