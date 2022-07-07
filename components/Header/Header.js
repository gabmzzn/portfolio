import Navbar from './Navbar/Navbar'
import { useState, useEffect } from 'react'
import css from './Header.module.css'

const Header = () => {

	const [scroll, setScroll] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 5)
		})
	}, [])

	return (
		<header className={`${css.header} ${scroll ? css.shadow : ''} center`}>
			<Navbar />
		</header>
	)
}

export default Header
