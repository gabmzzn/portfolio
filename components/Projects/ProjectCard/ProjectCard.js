import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import css from './ProjectCard.module.css'

const ProjectCard = ({ project }) => (
	<div className={css.project}>
		<h3>{project.name}</h3>

		<p className={css.description}>{project.description}</p>
		{project.stack && (
			<ul className={css.stack}>
				{project.stack.map((item) => (
					<li key={uniqid()} className={css.stackItem}>
						{item}
					</li>
				))}
			</ul>
		)}
		<div style={{ display: 'flex', justifyContent: 'center' }}>
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
		</div>
	</div>
)

export default ProjectCard
