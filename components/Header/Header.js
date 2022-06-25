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
		<header className={`${css.header} ${scroll && css.shadow} center`}>
			<h3 className={css.name}><a href='#'>Juan Gabriel Mazzoleni</a></h3>
			<Navbar />
		</header>
	)
}

export default Header
