import React from 'react'
import HeadBlock from '../HeadBlock'
import HeroItem from '../Hero/HeroItem'
import img from '../../assets/img/achievment/back.png'

const index = () => {
	const heroDb = [
		{
			number: '350+',
			title: 'Project Completed',
		},
		{
			number: '23+',
			title: 'Professional Teams',
		},
		{
			number: '15+',
			title: 'Years Experience',
		},
	]
	return (
		<div className='achievment section-page'>
			<div className='achievment__inner container'>
				<HeadBlock title='ACHIEVMENT' className='left120' />
				<h3 className='achievment__inner-title title'>
					interior customization with Danaanz, best quality with professional
					workers
				</h3>
				<div className='achievment__content'>
					<div className='achievment__content-left'>
						<img src={img} alt='img' />
					</div>
					<div className='achievment__content-right'>
						<div className='hero__inner-bot-list achievment-absolute'>
							<ul className='hero__inner-bot-list-content'>
								{heroDb.map((item, i) => (
									<HeroItem {...item} key={i} />
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
