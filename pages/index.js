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

export default function Home() {

	const { about, projects, certificates, education, skills, recommendations, contact } = portfolio

	const [{ themeName }] = useContext(ThemeContext)

	return (
		<div id='top' className={`${themeName} app`}>

			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Juan Gabriel Mazzoleni</title>
			</Head>

			<Header />
			<main>
				<About about={about} />
				<Projects id="experience" projects={projects} />
				<Skills skills={skills} />
				<Learning id="education" title="Education" learnings={education} />
				<Learning id="licenses" title="Licences & Certificates" learnings={certificates} />
				<Recommendations recommendations={recommendations} />
				<Contact contact={contact} />
			</main>

			<ScrollToTop />
			<Footer />
		</div>
	)
}
