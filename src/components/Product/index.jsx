import React from 'react'
import HeadBlock from '../HeadBlock'
import Tab from '../Service/Tabs'

const index = () => {
	const tabsDb = [
		{
			number: '01',
			title: 'Vintage',
		},
		{
			number: '02',
			title: 'Minimalist',
		},
		{
			number: '03',
			title: 'Modern',
		},
		{
			number: '04',
			title: 'transitional',
		},
	]
	return (
		<div className='product section'>
			<div className='product__inner container'>
				<HeadBlock title='PRODUCT' className='left90' />
				<div className='product__inner-main'>
					<h4 className='product__inner-main-title title'>
						Choose your product themes.
					</h4>
					<p className='product__inner-main-desc desc'>
						Find the theme you want. If our choice of theme is not what you
						want, you can customize it as you want.
					</p>
				</div>
				<ul className='product__inner-tabs'>
					{tabsDb.map((tab, i) => (
						<Tab {...tab} key={i} width='width470' gap='gap87' />
					))}
				</ul>
			</div>
		</div>
	)
}

export default index
