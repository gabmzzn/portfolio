import css from './Contact.module.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import Logo from '../Logo/Logo'

const Contact = (props) => {

	const { contact } = props

	if (!contact.email) return null

	return (

		<section className="normal" id='contact'>
			<div className='content'>
				<h2>Contact</h2>
				<div className={css.description}>
					<p>
						I am looking for job opportunities,
						and would love to connect!
					</p>
					<p>
						Drop me an email at&nbsp;<b>gabmzzn@gmail.com</b>&nbsp;
						<a href={`mailto:${contact.email}`}
							className={`${css.linkIcon} link`}
							target="_blank" rel="noreferrer">
							<MailIcon />
						</a>
					</p>
					<p>
						Call me or send a whatsapp message at&nbsp;<b>+54 351 772 4983</b>&nbsp;
						<a href={`tel:+543517724983`}
							className={`${css.linkIcon} link`}>
							<PhoneIcon />
						</a>
					</p>
					<p>
						Or just reach me at my&nbsp;
						<a
							href={'https://www.linkedin.com/in/juan-gabriel-mazzoleni/'}
							aria-label='linkedin'
							className={`link`}
							target="_blank" rel="noreferrer"
						>
							<b>LinkedIn</b>
							&nbsp;
							<LinkedInIcon />
						</a>&nbsp;profile 😉
					</p>
					<Logo className={css.svg} />
				</div>
			</div>
		</section>
	)
}

export default Contact
