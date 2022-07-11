import ExperienceCard from './ExperienceCard/ExperienceCard'
import css from './Experience.module.css'

const Experience = (props) => {

	const { experience, projects } = props

	if (!projects.length) return null

	return (
		<section id='experience' className="dark">
			<div className='content'>
				<h2>Experience</h2>
				<div className={css.cards}>
					{experience.map((e, i) => (
						<ExperienceCard key={i} work={e} />
					))}
				</div>
				<h1 className={css.h1}>projects</h1>
				<div className={css.cards}>
					{projects.map((p, i) => (
						<ExperienceCard key={i} work={p} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience
