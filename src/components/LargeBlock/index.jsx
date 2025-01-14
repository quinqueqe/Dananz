import React from 'react'

const index = ({ title, desc, width }) => {
	return (
		<div className='large-block'>
			<h3 className='large-title'>{title}</h3>
			<p className={`large-desc ${width}`}>{desc}</p>
		</div>
	)
}

export default index
