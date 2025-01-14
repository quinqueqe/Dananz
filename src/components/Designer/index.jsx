import React from 'react'
import PageTopBlock from '../PageTopBlock'
import DesignerCard from './DesignerCard'

import DesignerDb from './DesignerDb.json'

const index = () => {
	return (
		<div className='designer section-page'>
			<div className='designer__inner container'>
				<PageTopBlock
					title='Creative Person'
					desc='Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.'
					className='paddingbot80'
				/>
				<ul className='designer-cards'>
					{DesignerDb.map((card, i) => (
						<DesignerCard {...card} key={i} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default index
