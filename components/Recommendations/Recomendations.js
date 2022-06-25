import uniqid from 'uniqid'
import RecommendationsCard from './RecommendationsCard/RecommendationsCard'
import css from './Recommendations.module.css'

const Recommendations = (props) => {

	const { recommendations } = props

	if (!recommendations.length) return null

	return (
		<section id='recomm' className='section recommendations'>
			<h2 className='section__title'>Recommendations</h2>

			<div className={css.grid}>
				{recommendations.map((recommendation) => (
					<RecommendationsCard key={uniqid()} recommendation={recommendation} />
				))}
			</div>
		</section>
	)
}


export default Recommendations
