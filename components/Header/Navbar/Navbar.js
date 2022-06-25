import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../../contexts/theme'
import { Cross as Hamburger } from 'hamburger-react'
import css from './Navbar.module.css'

const Navbar = () => {

	const navbar = [
		'experience',
		'skills',
		'education',
		'licences',
		'languages',
		'recomm',
		'contact'
	]

	const [{ themeName, toggleTheme }] = useContext(ThemeContext)
	const [showNavList, setShowNavList] = useState(false)

	const toggleNavList = () => setShowNavList(!showNavList)

	return (
		<nav className='center'>
			<ul className={`${css.list} ${showNavList ? css.visible : ''}`}>
				<li className={`${css.listItem} ${css.about}`}>
					<a href={'#'} onClick={toggleNavList} className='link link--nav'>
						About
					</a>
				</li>
				{navbar.map((element, i) =>
					<li className={css.listItem} key={i}>
						<a
							href={`#${element}`}
							onClick={toggleNavList}
							className='link link--nav'
						>
							{element}
						</a>
					</li>
				)}
			</ul>

			{/* <button
				type='button'
				onClick={toggleTheme}
				className={`btn btn--icon ${css.theme}`}
				aria-label='toggle theme'
			>
				{themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
			</button> */}

			<button
				type='button'
				onClick={toggleNavList}
				className={`${css.hamburger}`}
				aria-label='toggle navigation'
			>
				<Hamburger toggled={showNavList} toggle={toggleNavList} />
			</button>
		</nav>
	)
}

export default Navbar
