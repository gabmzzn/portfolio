import css from './Contact.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import Logo from '../Logo/Glasses'

const Contact = (props) => {

	const { contact } = props

	if (!contact.email) return null

	return (
		<section className={`normal ${css.contact}`} id='contact'>
			<div className='content'>
				<h2>Contact</h2>
				<div className={css.description}>
					<p>
						I am looking for job opportunities,
						and would love to connect!
					</p>
					<p>
						Drop me an email at&nbsp;
						<a href={`mailto:${contact.email}`}
							className={`${css.linkIcon} link`}
							target="_blank" rel="noreferrer">
							<b>gabmzzn@gmail.com</b>&nbsp;
							<MailIcon />
						</a>
					</p>
					<p>
						Call me or send a whatsapp message at&nbsp;
						<a href={`tel:+543517724983`}
							className={`${css.linkIcon} link`}>
							<b>+54 351 772 4983</b>&nbsp;
							<PhoneAndroidIcon />
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
