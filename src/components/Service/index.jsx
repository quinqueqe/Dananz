import React from 'react'
import HeadBlock from '../HeadBlock'
import back from '../../assets/img/service/back.png'
import Tabs from './Tabs'
import PageTopBlock from '../PageTopBlock'

const Service = () => {
	const tabsDb = [
		{
			number: '01',
			title: 'Interior Design',
		},
		{
			number: '02',
			title: 'Consultant',
		},
		{
			number: '03',
			title: 'Construction Consultant',
		},
	]
	return (
		<div className='service section'>
			<div className='service__inner container'>
				<HeadBlock title='SERVICE' className='left80' />
				<PageTopBlock
					title='attractive furniture with the best quality.'
					desc='Customize your interior design into a dream place with the best
				designers and quality furniture. We try our best to fulfill your
				expectations.'
				/>
				<div className='service__inner-img'>
					<img src={back} alt='img' />
				</div>
				<ul className='service__inner-tabs'>
					{tabsDb.map((tab, i) => (
						<Tabs {...tab} key={i} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default Service
