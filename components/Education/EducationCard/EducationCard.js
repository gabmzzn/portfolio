import css from './EducationCard.module.css'

const EducationCard = ({ edu }) => {

	const { title, subtitle, description, info } = edu

	return (
		<div className={css.education}>
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<ul className={css.description}>
				{description.map(d => <li>{d}</li>)}
			</ul>
			{info && (
				<ul className={css.info}>
					{info}
				</ul>
			)}
		</div>)
}
export default EducationCard
