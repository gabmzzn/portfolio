import uniqid from 'uniqid'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import css from './Experience.module.css'

const Experience = (props) => {

	const { projects } = props

	if (!projects.length) return null

	return (
		<section id='experience' className="dark">
			<div className='content'>
				<h2>Experience</h2>
				<div className={css.cards}>
					{projects.map((project, i) => (
						<ExperienceCard key={i} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience
