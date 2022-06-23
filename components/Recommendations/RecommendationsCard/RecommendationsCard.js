import css from './RecommendationsCard.module.css'

const RecommendationsCard = ({ recommendation }) => (
	<div className={css.recommendation}>
		<h3>{recommendation.title}</h3>
		<h4>{recommendation.subtitle}</h4>
		<p className={css.description}>{recommendation.description}</p>
		{recommendation.years && (
			<ul className={css.stack}>
				{recommendation.years}
			</ul>
		)}
	</div>
)

export default RecommendationsCard
