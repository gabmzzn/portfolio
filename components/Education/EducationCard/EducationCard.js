import css from './EducationCard.module.css'
import Image from 'next/image'
import css2 from '../../Skills/Skills.module.css'

const EducationCard = ({ edu }) => {

	const { title, subtitle, description, info, img } = edu

	return (
		<div className={css.education}>
			<img src={img} className={css.img} alt={title} />
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<div className={css.info}>
				{info}
			</div>
			<ul className='listRound'>
				{description.map((d, i) =>
					<li key={i} className='itemRound'>{d}</li>)}
			</ul>
		</div>)
}
export default EducationCard
