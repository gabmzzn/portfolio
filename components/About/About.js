import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import css from './About.module.css'

const About = (props) => {

	const { about } = props
	const { name, role, description, resume, social } = about

	return (
		<div className={`${css.about} center`}>
			{name && (
				<h1>
					Hi, I am <span className={css.name}><br />Juan Gabriel <br />Mazzoleni</span>
				</h1>
			)}

			{role && <h2 className={css.role}>{role}</h2>}
			<p className={css.desc}>{description && description}</p>

			<div className={`${css.contact} center`}>
				{resume && (
					<a href={resume}>
						<span type='button' className={`${css.btnOutline} btn--outline btn`}>
							Resume
						</span>
					</a>
				)}

				{social && (
					<>
						{social.github && (
							<a
								href={social.github}
								aria-label='github'
								className={`${css.linkIcon} link`}
							>
								<GitHubIcon />
							</a>
						)}

						{social.linkedin && (
							<a
								href={social.linkedin}
								aria-label='linkedin'
								className={`${css.linkIcon} link`}
							>
								<LinkedInIcon />
							</a>
						)}
					</>
				)}
			</div>
		</div>
	)
}

export default About
