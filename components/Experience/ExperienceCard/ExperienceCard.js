import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import css from './ExperienceCard.module.css'

const ExperienceCard = ({ work }) => (
	<div className={css.work}>
		<h3>{work.name}</h3>
		{work.time && <span className={css.time}>{work.time}</span>}
		<p className={css.description}>{work.description}</p>
		{work.stack && (
			<ul className={css.stack}>
				{work.stack.map((item, i) => (
					<li key={i} className={css.stackItem}>
						{item}
					</li>
				))}
			</ul>
		)}
		{(work.sourceCode || work.livePreview) &&
			<div style={{ display: 'flex', marginTop: '1.2em' }}>
				{work.sourceCode && (
					<a
						href={work.sourceCode}
						aria-label='source code'
						className={`${css.linkIcon} link`}
						target='_blank' rel="noreferrer"
					>
						<h5>GitHub</h5>
						<GitHubIcon />
					</a>
				)}
				{work.livePreview && (
					<a
						href={work.livePreview}
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
