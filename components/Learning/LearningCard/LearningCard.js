import css from './LearningCard.module.css'

const LearningCard = ({ learn }) => {

	const { title, subtitle, description, info, link } = learn

	return (
		<div className={css.learning}>
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<p className={css.description}>{description}</p>
			<ul className={css.stack}>{info}</ul>

		</div>)

}
export default LearningCard
