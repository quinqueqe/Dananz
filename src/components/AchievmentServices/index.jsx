import React from 'react'
import achievmentServicesDb from './AchievmentServicesDb.json'
import Card from './AchievmentServicesCard'

const index = () => {
  return (
	<div className='achievmentServices section-page'>
		<div className="achievmentServices__inner container">
			<ul>
				{achievmentServicesDb.map((card, i) => (<Card {...card} key={i}/>))}
			</ul>
		</div>
	  
	</div>
  )
}

export default index
