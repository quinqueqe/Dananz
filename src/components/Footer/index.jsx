import React from 'react'
import logo from '../../assets/img/header/logo.png'
import arrowRight from '../../assets/img/footer/arrow-right.svg'
import Social from './Social'

const index = () => {
	return (
		<footer className='footer'>
			<div className='footer__inner container'>
				<div className='footer-content'>
					<div className='footer-content__left'>
						<img src={logo} alt='img' />
						<h4 className='footer-content__left-title title'>
							One of the best furniture agency.
						</h4>
					</div>
					<div className='footer-content__right'>
						<div className='footer-content__right-form'>
							<p>Enter your email to get the laterst news</p>
							<div className='footer-content__right-form-inputBlock'>
								<input placeholder='Email Address' type='email' name='email'/>
								<button type='submit'>
									<img src={arrowRight} alt='img' />
								</button>
							</div>
						</div>
						<Social/>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default index
