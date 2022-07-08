import uniqid from 'uniqid'
import LanguagesCard from './LanguagesCard/LanguagesCard'
import css from './Languages.module.css'

const Languages = (props) => {

	const { id, title, data, flag } = props

	if (!data.length) return null

	return (
		<section id="languages" className='dark'>
			<div className='content'>
				<h2>Languages</h2>
				<div className={css.grid}>
					{data.map((lang, i) => (
						<LanguagesCard key={i} data={lang} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Languages
