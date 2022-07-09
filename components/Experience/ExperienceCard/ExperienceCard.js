import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import css from './ExperienceCard.module.css'

const ExperienceCard = ({ project }) => (
	<div className={css.project}>
		<h3>{project.name}</h3>

		<p className={css.description}>{project.description}</p>
		{project.stack && (
			<ul className={css.stack}>
				{project.stack.map((item, i) => (
					<li key={i} className={css.stackItem}>
						{item}
					</li>
				))}
			</ul>
		)}
		{(project.sourceCode || project.livePreview) &&
			<div style={{ display: 'flex', marginTop: '1.2em' }}>
				{project.sourceCode && (
					<a
						href={project.sourceCode}
						aria-label='source code'
						className={`${css.linkIcon} link`}
						target='_blank' rel="noreferrer"
					>
						<h5>GitHub</h5>
						<GitHubIcon />
					</a>
				)}
				{project.livePreview && (
					<a
						href={project.livePreview}
						aria-label='live preview'
						className={`${css.linkIcon} link`}
						target='_blank' rel="noreferrer"
					>
						<h5>Website</h5>
						<LaunchIcon />
					</a>
				)}
			</div>}
	</div>
)

export default ExperienceCard
