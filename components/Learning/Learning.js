import uniqid from 'uniqid'
import LearningCard from './LearningCard/LearningCard'
import css from './Learning.module.css'

const Learning = (props) => {

	const { title, learnings } = props

	if (!learnings.length) return null

	return (
		<section id='learnings' className='section learnings'>
			<h2 className='section__title'>{title}</h2>

			<div className={css.grid}>
				{learnings.map((learn) => (
					<LearningCard key={uniqid()} learn={learn} />
				))}
			</div>
		</section>
	)
}

export default Learning
