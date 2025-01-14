import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/header/logo.png'

export default function Header() {
	const HeaderDb = ['Home', 'About Us', 'Services', 'Our Teams']
	const RoutesDb = ['/', '/about-us', '/services', '/our-teams', '/contacts-us']
	// const [activeTab, setActiveTab] = React.useState(0)

	




	
	// функционал для сохранения активного таба в localStorage
	// Получаем значение активного таба из localStorage или устанавливаем по умолчанию 0
	const [activeTab, setActiveTab] = React.useState(() => {
		const savedTab = localStorage.getItem('activeTab')
		return savedTab !== null ? Number(savedTab) : 0 // Преобразуем строку в число
	})

	// Сохраняем активный таб в localStorage при изменении
	React.useEffect(() => {
		localStorage.setItem('activeTab', activeTab)
	}, [activeTab])

	return (
		<header className='header section'>
			<div className='header__inner container'>
				<Link to='/' className='header__inner-logo'>
					<img src={logo} alt='img' />
				</Link>
				<div className='header__inner-list'>
					{HeaderDb.map((item, i) => (
						<Link
							to={RoutesDb[i]}
							className={
								activeTab === i
									? 'header__inner-list-btn-active header__inner-list-btn'
									: 'header__inner-list-btn'
							}
							onClick={() => setActiveTab(i)}
							key={i}
						>
							{item}
						</Link>
					))}
				</div>
				<Link
					to='/contact-us'
					onClick={() => setActiveTab(-1)}
					className='header__inner-btn blue-link'
				>
					Contact Us
				</Link>
			</div>
		</header>
	)
}
