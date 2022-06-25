import css from './Contact.module.css'

const Contact = (props) => {

	const { contact } = props

	if (!contact.email) return null

	return (
		<section className={`${css.contact} section center`} id='contact'>
			<h2 className='section__title'>Contact</h2>
			<p className={css.description}>I am looking for job opportunities, and would love to connect! Drop me an email and I will get back to you, or find me on social media:</p>
			<a href={`mailto:${contact.email}`}>
				<span type='button' className='btn btn--outline'>
					Email me
				</span>
			</a>
		</section>
	)
}

export default Contact
