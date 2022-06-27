import uniqid from 'uniqid'
import EducationCard from './EducationCard/EducationCard'
import css from './Education.module.css'

const Education = (props) => {

	const { id, title, data } = props

	if (!data.length) return null

	return (
		<section id={id} className='section'>
			<h2 className='section__title'>{title}</h2>

			<div className={css.grid}>
				{data.map((edu) => (
					<EducationCard key={uniqid()} edu={edu} />
				))}
			</div>
		</section>
	)
}

export default Education
