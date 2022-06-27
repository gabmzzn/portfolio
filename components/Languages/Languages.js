import uniqid from 'uniqid'
import LanguagesCard from './LanguagesCard/LanguagesCard'
import css from './Languages.module.css'

const Languages = (props) => {

	const { id, title, data, flag } = props

	if (!data.length) return null

	return (
		<section id={id} className='section'>
			<h2 className='section__title'>{title}</h2>

			<div className={css.grid}>
				{data.map((lang) => (
					<LanguagesCard key={uniqid()} data={lang} />
				))}
			</div>
		</section>
	)
}

export default Languages
