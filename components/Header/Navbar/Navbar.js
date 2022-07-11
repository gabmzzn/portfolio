import { useEffect, useState } from "react"
import { Cross as Hamburger } from 'hamburger-react'
import Logo from "../../Logo/Glasses"
import css from './Navbar.module.css'

// helpers
const capitalize = (text) =>
	text.charAt(0).toUpperCase() + text.substr(1)

const clamp = (value) => Math.max(0, value)

const isBetween = (value, floor, ceil) =>
	value >= floor && value <= ceil

// hooks
const useScrollspy = (ids, offset = 0) => {
	const [activeId, setActiveId] = useState("")

	useEffect(() => {
		const listener = () => {
			const scroll = window.pageYOffset

			const position = ids
				.map((id) => {
					const element = document.getElementById(id)

					if (!element) return { id, top: -1, bottom: -1 }

					const rect = element.getBoundingClientRect()
					const top = clamp(rect.top + scroll - offset)
					const bottom = clamp(rect.bottom + scroll - offset)
					return { id, top, bottom }
				})
				.find(({ top, bottom }) => isBetween(scroll, top, bottom))
			setActiveId(position?.id || "")
		}

		listener()

		window.addEventListener("resize", listener)
		window.addEventListener("scroll", listener)

		return () => {
			window.removeEventListener("resize", listener)
			window.removeEventListener("scroll", listener)
		}
	}, [ids, offset])
	return activeId
}

const Navbar = () => {

	const navbar = [
		'experience',
		'skills',
		'education',
		'certificates',
		'languages',
		// 'testimonials',
		'contact'
	]

	const activeId = useScrollspy(navbar, 66) // 54 is navigation height

	const [navList, setNavList] = useState(false)

	const hideNavList = () => setNavList(false)
	const toggleNavList = () => setNavList(!navList)

	return (
		<nav className={css.navbar}>
			<a href='#' className={css.logoMob}>
				<Logo className={css.svg} />
			</a>
			<ul className={`${css.list} ${navList ? css.visible : css.invisible}`}>
				<a href='#' className={css.logo}>
					<Logo className={css.svg} />
				</a>
				<li className={`${css.listItem} ${css.about}`}>
					<a href={'#'} onClick={toggleNavList} className={css.link}>
						about
					</a>
				</li>
				{navbar.map((element, i) =>
					<li className={`${css.listItem} ${element == activeId ? css.active : css.unactive}`} key={i}>
						<a
							href={`#${element}`}
							className={css.link}
							onClick={hideNavList}
						>
							{element}
						</a>
					</li>
				)}
			</ul>
			<button
				type='button'
				onClick={toggleNavList}
				className={`${css.hamburger}`}
				aria-label='toggle navigation'
			>
				<Hamburger toggled={navList} toggle={toggleNavList} />
			</button>
		</nav>
	)
}

export default Navbar
