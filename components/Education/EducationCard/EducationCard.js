import css from './EducationCard.module.css'

const EducationCard = ({ edu }) => {

	const { title, subtitle, description, info, img } = edu

	return (
		<div className={css.education}>
			<img src={img} className={css.img} />
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<ul className={css.info}>
				{info}
			</ul>
			<ul className={css.description}>
				{description.map(d => <li>{d}</li>)}
			</ul>
		</div>)
}
export default EducationCard
