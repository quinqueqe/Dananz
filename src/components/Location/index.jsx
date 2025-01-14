import React from 'react'
import HeadBlock from '../HeadBlock'
import PageTopBlock from '../PageTopBlock'
import LocationCard from './LocationCard'

const index = () => {
	const LocationCardDb = [
		{
			title: 'Jakarta',
			desc: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
		},
		{
			title: 'Surakarta',
			desc: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
		},
		{
			title: 'Yogyakarta',
			desc: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
		},
		{
			title: 'Bandung',
			desc: 'Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.',
		},
	]
	return (
		<div className='location section-page'>
			<div className='location__inner container'>
				<HeadBlock title='LOCATION' className='left100' />
				<div className='location__content'>
					<div className='location__content-left'>
						<div className='location__content-left-visit'>
							<PageTopBlock
								title='Visit Our Stores'
								desc='Find us at these locations.'
								className='paddingbot40'
							/>
						</div>
						<div className='location__content-left-info'>
							<div>
								<h4 className='title'>Email</h4>
								<a className='desc' href='mailto:dananz@gmail.com'>
									dananz@gmail.com
								</a>
							</div>
							<div>
								<h4 className='title'>Phone</h4>
								<a className='desc' href='tel:+628150021000'>
									+62 815 002 1000
								</a>
							</div>
						</div>
					</div>
					<div className='location__content-right'>
						<ul className='locations__content-right-cards'>
							{LocationCardDb.map((card, i) => (
								<LocationCard {...card} key={i} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
