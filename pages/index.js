import Head from 'next/head'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import Learning from '../components/Certificates/Certificates'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Contact from '../components/Contact/Contact'
import * as portfolio from '../data/portfolio'
import Education from '../components/Education/Education'
import Languages from '../components/Languages/Languages'
import ReactPageScroller from 'react-page-scroller'

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
				<Projects projects={projects} />
				<Education data={education} />
				<Skills skills={skills} />
				<Learning data={certificates} />
				<Languages data={languages} />
				<Contact contact={contact} />
				<ScrollToTop />
			</main>
		</div >
	)
}
