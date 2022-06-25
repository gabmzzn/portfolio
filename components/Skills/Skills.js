import uniqid from 'uniqid'
import css from './Skills.module.css'

const Skills = (props) => {

	const { skills } = props

	if (!skills.length) return null

	return (
		<section className='section skills' id='skills'>
			<h2 className='section__title'>Skills</h2>
			{skills.map((skill, i) => (
				<div key={i}>
					<h4 className='section__title' style={{ textTransform: 'none' }}>
						{skill.name}
					</h4>
					<ul className={css.list}>
						{skill.skills.map((s) => (
							<li key={uniqid()} className={`${css.listItem} btn btn--plain`}>
								{s}
							</li>
						))}
					</ul>
				</div>
			))}
		</section>
	)
}

export default Skills
