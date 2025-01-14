import React from 'react'

const DesignerCard = ({img}) => {
	return (
		<li className='designer__card'>
			<div className='designer__card-img'>
				<img src={img} alt='img' />
			</div>
				<div className='designer__card-inner'>
					<h4>Shoo Phar Dhie</h4>
					<p>CEO</p>
				</div>
		</li>
	)
}

export default DesignerCard
