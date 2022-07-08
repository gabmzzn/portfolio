import uniqid from 'uniqid'
import css from './Skills.module.css'

const Skills = (props) => {

	const { skills } = props

	if (!skills.length) return null

	return (
		<section id='skills' className='dark'>
			<div className='content'>
				<h2>Skills</h2>
				{skills.map((skill, i) => (
					<div key={i}>
						<h4>
							{skill.name}
						</h4>
						<ul className={css.list}>
							{skill.skills.map((s, i) => (
								<li key={i} className={css.item}>
									{s}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}

export default Skills
