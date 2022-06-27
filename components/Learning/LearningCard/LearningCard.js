import css from './LearningCard.module.css'
import LaunchIcon from '@material-ui/icons/Launch'

const LearningCard = ({ learn }) => {

	const { title, subtitle, description, info, link } = learn

	return (
		<div className={css.learning}>
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<p className={css.description}>{description}</p>
			<ul className={css.stack}>{info}</ul>
			{link && (
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<a
						href={link}
						aria-label='certificate'
						className={`${css.linkIcon} link`}
						target='_blank' rel="noreferrer"
					>
						<h5>Certificate</h5>
						<LaunchIcon />
					</a>
				</div>
			)}
		</div>)

}
export default LearningCard
