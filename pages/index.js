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
import { header, about, projects, certificates, education, skills, recommendations, contact } from '../data/portfolio'

export default function Home() {

	const [{ themeName }] = useContext(ThemeContext)

	return (
		<div id='top' className={`${themeName} app`}>
			<Head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Portfolio" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
				<title>Juan Gabriel Mazzoleni</title>
			</Head>


			<Header header={header} navbar={{ projects, skills, contact }} />

			<main>
				<About about={about} />
				<Projects projects={projects} />
				<Skills skills={skills} />
				<Learning title="Education" learnings={education} />
				<Learning title="Licences & Certificates" learnings={certificates} />
				<Recommendations recommendations={recommendations} />
				<Contact contact={contact} />
			</main>

			<ScrollToTop />
			<Footer />
		</div>
	)
}
