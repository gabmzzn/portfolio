import CertificatesCard from './CertificatesCard/CertificatesCard'
import css from './Certificates.module.css'

const Certificates = (props) => {

	const { id, title, data } = props

	if (!data.length) return null

	return (
		<section id='certificates' className='normal'>
			<div className='content'>
				<h2>Certificates</h2>
				<div className={css.grid}>
					{data.map((learn, i) => (
						<CertificatesCard key={i} learn={learn} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Certificates
