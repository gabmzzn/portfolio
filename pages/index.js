import Head from 'next/head'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Skills from '../components/Skills/Skills'
import Learning from '../components/Certificates/Certificates'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Contact from '../components/Contact/Contact'
import * as portfolio from '../data/portfolio'
import Education from '../components/Education/Education'
import Languages from '../components/Languages/Languages'

export default function Home() {

	const { about, projects, certificates, education,
		skills, languages, contact } = portfolio


	return (
		<div className={`theme app`}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Juan Gabriel Mazzoleni</title>
			</Head>

			<Header />
			<main>
				<About about={about} />
				<Experience projects={projects} />
				<Skills skills={skills} />
				<Education data={education} />
				<Learning data={certificates} />
				<Languages data={languages} />
				<Contact contact={contact} />
				<ScrollToTop />
			</main>
		</div >
	)
}
