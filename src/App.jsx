import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Discuss from './components/Discuss'
import Footer from './components/Footer'

// Страницы
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import OurTeams from './pages/OurTeams'
import ContactUs from './pages/ContactsUs'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about-us' element={<AboutUs />} />
				<Route path='/services' element={<Services />} />
				<Route path='/our-teams' element={<OurTeams />} />
				<Route path='/contact-us' element={<ContactUs />} />
			</Routes>
			<Discuss />
			<Footer />
		</>
	)
}

export default App
