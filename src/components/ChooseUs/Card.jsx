import React from 'react'
import img from '../../assets/img/chooseUs/circle.png'

const Card = ({title, desc}) => {
	return (
		<li>
			<img src={img} alt='img' />
			<h4>{title}</h4>
			<p>{desc}</p>
		</li>
	)
}

export default Card
