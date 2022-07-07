import css from './EducationCard.module.css'
import Image from 'next/image'

const EducationCard = ({ edu }) => {

	const { title, subtitle, description, info, img } = edu

	return (
		<div className={css.education}>
			<img src={img} className={css.img} alt={title} />
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<ul className={css.info}>
				{info}
			</ul>
			<ul className={css.description}>
				{description.map((d, i) => <li key={i}>{d}</li>)}
			</ul>
		</div>)
}
export default EducationCard
