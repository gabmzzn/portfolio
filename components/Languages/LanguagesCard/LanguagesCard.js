import css from './LanguagesCard.module.css'

const LanguagesCard = (props) => {

	const { title, subtitle, description, info, img } = props.data

	return (
		<div className={css.language}>
			<img src={img} className={css.img} alt={title} />
			<h1>{title}</h1>
			<h4>{subtitle}</h4>
			<ul className='listRound'>
				{description.map((d, i) => <li key={i} className='itemRound'>{d}</li>)}
			</ul>
		</div>)
}
export default LanguagesCard
