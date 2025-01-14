import React from 'react'
import LargeBlock from '../LargeBlock'
import img from '../../assets/img/heroOurTeam/back.png'

const index = () => {
	return (
		<div className='heroOurTeams section-page'>
			<div className='heroOurTeams__inner container'>
				<div className='heroOurTeams__inner-top'>
					<LargeBlock
						title='Our Teams'
						desc='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
						width='width518'
					/>
				</div>
				<img src={img} alt='img' />
			</div>
		</div>
	)
}

export default index
