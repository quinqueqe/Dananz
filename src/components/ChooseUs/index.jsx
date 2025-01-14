import React from 'react'
import HeadBlock from '../HeadBlock'
import PageTopBlock from '../PageTopBlock'
import Card from './Card'

const index = () => {
	const cardDb = [
		{
			title: 'High Quality',
			desc: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
		},
		{
			title: 'Professional Designer',
			desc: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
		},
		{
			title: 'The Best Services',
			desc: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
		},
	]
	return (
		<div className='choouseUs section-page'>
			<div className='chooseUs__inner container'>
				<HeadBlock title='SERVICE' className='left80' />
				<PageTopBlock
					title='Why Choose Us'
					desc='Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
					className='paddingbot40'
				/>
				<ul>
					{cardDb.map((card, i) => (
						<Card {...card} key={i} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default index
