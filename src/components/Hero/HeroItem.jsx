import React from 'react'

const HeroItem = ({ number, title }) => {
	return (
		<li>
			<p>{number}</p>
			<h3>{title}</h3>
		</li>
	)
}

export default HeroItem
