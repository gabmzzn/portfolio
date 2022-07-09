import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import css from './About.module.css'

const About = (props) => {

	const { about } = props
	const { role, description, resume, social } = about

	const navbar = [
		'experience',
		'skills',
		'education',
		'certificates',
		'languages',
		// 'testimonials',
		'contact'
	]

	return (
		<section className={css.container}>
			<div className='content'>
				<div className={css.flexbox}>
					<div className={css.about}>
						<div className={css.hi}>
							Hi, my name is
						</div>
						<h1>
							<div className={css.name}>
								<p>Juan Gabriel</p>
								<p>Mazzoleni</p>
							</div>
						</h1>

						<div className={css.role}>{role}</div>
						<p className={css.desc}>
							I live in Cordoba, Argentina, and I&apos;m a passionate multi-skilled <br />
							developer and information systems engineer student
						</p>

						<div className={css.contact}>
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
								<span type='button' className={css.btn}>
									resume / cv
								</span>
							</a>
						</div>
					</div>
					<div className={css.navList}>
						{navbar.map((element, i) =>
							<li className={css.listItem} key={i}>
								<a
									href={`#${element}`}
									className={css.link}
								>
									{element}
								</a>
							</li>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
