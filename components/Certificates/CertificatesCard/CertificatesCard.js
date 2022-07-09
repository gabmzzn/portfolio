import css from './CertificatesCard.module.css'
import LaunchIcon from '@mui/icons-material/Launch'

const CertificatesCard = ({ learn }) => {

	const { title, subtitle, description, info, link } = learn

	return (
		<div className={css.learning}>
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<p className={css.description}>{description}</p>
			<ul className={css.stack}>{info}</ul>
			{link && (
				<a
					href={link}
					aria-label='certificate'
					className={`${css.linkIcon} link`}
					target='_blank' rel="noreferrer"
				>
					<h5>Certificate</h5>
					<LaunchIcon />
				</a>
			)}
		</div>)

}
export default CertificatesCard
