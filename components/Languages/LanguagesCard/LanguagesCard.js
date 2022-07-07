import css from './LanguagesCard.module.css'
import Image from 'next/image'

const LanguagesCard = (props) => {

	const { title, subtitle, description, info, img } = props.data

	return (
		<div className={css.language}>
			<img src={img} className={css.img} alt={title} />
			<h3>{title}</h3>
			<h4>{subtitle}</h4>
			<ul className={css.description}>
				{description.map((d, i) => <li key={i}>{d}</li>)}
			</ul>
		</div>)
}
export default LanguagesCard
