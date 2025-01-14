import React from 'react'

const index = ({ title, desc, className }) => {
	return (
		<>
			<h4 className='service__inner-title title'>{title}</h4>
			<p className={`service__inner-desc desc ${className}`}>{desc}</p>
		</>
	)
}

export default index
