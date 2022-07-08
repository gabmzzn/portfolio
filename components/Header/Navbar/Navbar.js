import { useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import css from './Navbar.module.css'

const Navbar = () => {

	const navbar = [
		'experience',
		'skills',
		'education',
		'certificates',
		'languages',
		// 'recomm',
		'contact'
	]

	const [showNavList, setShowNavList] = useState(false)

	const toggleNavList = () => setShowNavList(!showNavList)

	return (
		<nav className={css.navbar}>
			<a href='#' className={css.logo}>
				<svg className={css.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
					<g>
						<g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
							<path d="M1564.6,2470.1c-274.1-72.8-488.7-235.7-726.4-552C569.9,1561.7,361,1201.3,192.3,804.6c-82.4-193.6-90.1-224.2-92-375.6c-1.9-157.2,1.9-168.7,69-277.9c78.6-128.4,115-245.3,159.1-506c82.4-506,345-1063.7,655.5-1399.1c218.5-237.7,498.3-400.6,822.2-483c153.3-40.2,216.6-44.1,621-42.2c530.9,0,701.5,28.8,987,168.7c538.6,260.7,818.4,651.6,1146.1,1611.9c69,201.2,130.3,377.6,138,394.8c5.7,17.3,47.9,49.8,92,74.8c145.7,82.4,379.5,57.5,477.2-51.7c19.2-21.1,90.1-201.2,157.2-404.4c327.7-967.9,613.3-1368.4,1163.3-1632.9c276-132.3,450.4-161,975.5-161c404.4-1.9,467.7,1.9,621,42.2c316.2,80.5,596,241.5,808.8,467.6c291.3,310.5,542.4,812.6,640.1,1280.3c93.9,452.3,113.1,517.5,184,632.5c128.4,207,111.2,369.9-80.5,795.4c-297.1,659.3-768.6,1287.9-1081,1443.2c-320.1,157.2-557.7,157.2-1025.4-1.9c-230-78.6-291.3-109.2-352.7-174.4c-120.7-128.4,53.7-404.4,233.8-368c30.7,5.8,113.1,53.7,184,105.4c212.7,157.2,423.6,287.5,496.4,306.7c118.8,34.5,226.2-7.7,352.7-132.2c86.2-86.2,132.2-161,231.9-366.1c113.1-230,377.6-900.8,377.6-954.5c0-26.8-7.7-26.8-354.6,7.7c-377.6,36.4-1136.5,36.4-1562,0c-184-17.2-567.3-59.4-852.9-95.8C5026,538.2,4889.9,538.2,3663.3,701.1C2963.7,795,2680.1,818,2120.4,827.6c-446.6,7.7-640.1,3.8-916.1-23c-193.6-17.2-356.5-26.8-362.2-21.1c-24.9,24.9,258.7,757.1,402.5,1036.9c168.7,329.7,364.2,483,553.9,429.3c72.8-19.2,283.7-149.5,496.4-306.7c147.6-107.3,218.5-128.4,297.1-88.2c93.9,49.8,145.7,118.8,157.1,214.7c15.3,141.8-51.7,195.5-389.1,310.5C1999.7,2502.7,1779.3,2527.6,1564.6,2470.1z" />
						</g>
					</g>
				</svg>
			</a>
			<ul className={`${css.list} ${showNavList ? css.visible : css.invisible}`}>
				<li className={`${css.listItem} ${css.about}`}>
					<a href={'#'} onClick={toggleNavList} className={`${css.link} link--nav`}>
						About
					</a>
				</li>
				{navbar.map((element, i) =>
					<li className={css.listItem} key={i}>
						<a
							href={`#${element}`}
							onClick={toggleNavList}
							className={`${css.link} link--nav`}
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
