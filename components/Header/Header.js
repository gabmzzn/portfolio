import Navbar from './Navbar/Navbar'
import { useState, useEffect } from 'react'
import css from './Header.module.css'

const Header = () => {

	const [scroll, setScroll] = useState(false)
	const [shadow, setShadow] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 600)
			setShadow(window.scrollY > 10)
		})
	}, [])

	return (
		<header className={`${css.header} 
		${scroll ? css.navbarDisplay : ''}
		${shadow ? css.shadow : ''}`}>
			<Navbar />
		</header>
	)
}

export default Header
