import React from 'react'

const achievmentServicesCard = ({img, title,desc}) => {
	return (
		<li>
			<img src={img} alt='img' />
			<div>
				<h5>{title}</h5>
				<p>{desc}</p>
			</div>
		</li>
	)
}

export default achievmentServicesCard
