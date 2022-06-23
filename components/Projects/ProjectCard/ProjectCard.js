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

		{project.sourceCode && (
			<a
				href={project.sourceCode}
				aria-label='source code'
				className='link link--icon'
			>
				<GitHubIcon />
			</a>
		)}

		{project.livePreview && (
			<a
				href={project.livePreview}
				aria-label='live preview'
				className='link link--icon'
			>
				<LaunchIcon />
			</a>
		)}
	</div>
)

export default ProjectCard
