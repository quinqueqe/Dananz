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
				<Route path='/dananz' element={<Home />} />
				<Route path='/dananz/about-us' element={<AboutUs />} />
				<Route path='/dananz/services' element={<Services />} />
				<Route path='/dananz/our-teams' element={<OurTeams />} />
				<Route path='/dananz/contact-us' element={<ContactUs />} />
			</Routes>
			<Discuss />
			<Footer />
		</>
	)
}

export default App
