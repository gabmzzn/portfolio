import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import css from './About.module.css'

const About = (props) => {

	const { about } = props
	const { name, role, description, resume, social } = about

	return (
		<div className={css.about}>
			<h2 className={css.hi}>
				Hi, my name is
			</h2>
			<h1>
				<span className={css.name}>
					Juan Gabriel <br />Mazzoleni
				</span>
			</h1>

			{role && <h2 className={css.role}>{role}</h2>}
			<p className={css.desc}>{description}</p>

			<div className={`${css.contact} center`}>
				<a
					href={social.github}
					aria-label='github'
					className={`${css.linkIcon} link`}
					target="_blank" rel="noreferrer"
				>
					<h5>GitHub</h5>
					<GitHubIcon />
				</a>
				<a
					href={social.linkedin}
					aria-label='linkedin'
					className={`${css.linkIcon} link`}
					target="_blank" rel="noreferrer"
				>
					<h5>LinkedIn</h5>
					<LinkedInIcon />
				</a>
				<a href={resume}
					aria-label='github'
					target="_blank" rel="noreferrer"
				>
					<span type='button' className={`${css.btnOutline} btn`}>
						Resume / cv
					</span>
				</a>
			</div>
		</div>
	)
}

export default About
