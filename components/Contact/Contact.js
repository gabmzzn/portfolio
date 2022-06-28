import css from './Contact.module.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'

const Contact = (props) => {

	const { contact } = props

	if (!contact.email) return null

	return (
		<section className={`${css.contact} section center`} id='contact'>
			<h2 className='section__title'>Contact</h2>
			<p className={css.description}>
				I am looking for job opportunities,
				and would love to connect!<br />
				Drop me an email at <b>gabmzzn@gmail.com</b>&nbsp;
				<a href={`mailto:${contact.email}`}
					className={`${css.linkIcon} link`}
					target="_blank" rel="noreferrer">
					<MailIcon />
				</a><br />
				Call me or send a whatsapp message at <b>+54 351 772 4983</b>&nbsp;
				<a href={`tel:+543517724983`}
					className={`${css.linkIcon} link`}
					target="_blank" rel="noreferrer">
					<PhoneIcon />
				</a><br />
				Or just reach me at &nbsp;
				<a
					href={'https://www.linkedin.com/in/juan-gabriel-mazzoleni/'}
					aria-label='linkedin'
					className={`${css.linkIcon} link`}
					target="_blank" rel="noreferrer"
				>
					<span>LinkedIn</span>
					&nbsp;
					<LinkedInIcon />
				</a>
			</p>
		</section>
	)
}

export default Contact
