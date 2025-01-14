import React from 'react'

const LocationCard = ({ title, desc }) => {
	return (
		<li className='locations__content-right-cards-card'>
			<h5 className='title'>{title}</h5>
			<p className='desc'>{desc}</p>
		</li>
	)
}

export default LocationCard
