import uniqid from 'uniqid'
import css from './Skills.module.css'

const Skills = (props) => {

	const { skills } = props

	if (!skills.length) return null

	return (
		<section id='skills' className='normal'>
			<div className='content'>
				<h2>Skills</h2>
				<div className={css.skills}>
					{skills.map((skill, i) => (
						<div key={i}>
							<h1>
								{skill.name}
							</h1>
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
			</div>
		</section>
	)
}

export default Skills
