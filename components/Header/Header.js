import Navbar from '../Navbar/Navbar'
import css from './Header.module.css'

const Header = (props) => {
	const { header, navbar } = props
	const { homepage, title } = header

	return (
		<header className={`${css.header} center`}>
			<h3>
				{homepage ? (
					<a href={homepage} className='link'>
						{title}
					</a>
				) : (
					title
				)}
			</h3>
			<Navbar navbar={navbar} />
		</header>
	)
}

export default Header
