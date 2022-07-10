import Navbar from './Navbar/Navbar'
import { useState, useEffect } from 'react'
import css from './Header.module.css'

const Header = () => {

	const [shadow, setShadow] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setShadow(window.scrollY > 10)
		})
	}, [])

	return (
		<header className={`${css.header} 
		${shadow ? css.shadow : ''}`}>
			<Navbar />
		</header>
	)
}

export default Header
