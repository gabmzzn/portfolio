import Head from 'next/head'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import Learning from '../components/Learning/Learning'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Recommendations from '../components/Recommendations/Recomendations'
import * as portfolio from '../data/portfolio'
import Education from '../components/Education/Education'
import Languages from '../components/Languages/Languages'
export default function Home() {

	const { about, projects, certificates, education,
		skills, recommendations, languages, contact } = portfolio

	const [{ themeName }] = useContext(ThemeContext)

	return (
		<div className={`${themeName} app`}>

			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Juan Gabriel Mazzoleni</title>
			</Head>

			<Header />
			<main>
				<About about={about} />
				<Projects id="experience" projects={projects} />
				<Education id="education" title="Education" data={education} />
				<Skills skills={skills} />
				<Learning id="certificates" title="Certificates" data={certificates} />
				<Languages id="languages" title="Languages" data={languages} />
				{/* <Recommendations recommendations={recommendations} /> */}
				<Contact contact={contact} />
			</main>

			<ScrollToTop />
			<Footer />
		</div>
	)
}
