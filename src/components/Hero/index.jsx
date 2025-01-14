import React from 'react'
import HeroItem from './HeroItem'
import img from '../../assets/img/header/illustation.jpg'

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
		<div className='hero section'>
			<div className='hero__inner container'>
				<div className='hero__inner-top'>
					<h2>Design your interor with high quality.</h2>
					<div className='hero__inner-top-subscribe'>
						<p>2022</p>
						<p>ALL RIGHT RESERVED</p>
					</div>
				</div>
				<div className='hero__inner-bot'>
					<img src={img} alt='img' />
					<div className='hero__inner-bot-list'>
						<ul className='hero__inner-bot-list-content'>
							{heroDb.map((item, i) => (
								<HeroItem {...item} key={i} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
