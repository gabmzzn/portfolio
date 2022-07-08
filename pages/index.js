import Head from 'next/head'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import Learning from '../components/Learning/Learning'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Contact from '../components/Contact/Contact'
import * as portfolio from '../data/portfolio'
import Education from '../components/Education/Education'
import Languages from '../components/Languages/Languages'
import ReactFullpage from '@fullpage/react-fullpage'

export default function Home() {

	const { about, projects, certificates, education,
		skills, testimonials, languages, contact } = portfolio

	const components = [
		<About about={about} />,
		<Projects id="experience" projects={projects} />,
		<Skills skills={skills} />,
		<Learning id="certificates" title="Certificates" data={certificates} />,
		<Languages id="languages" title="Languages" data={languages} />,
		<Contact contact={contact} />]

	return (
		<div className={`theme app`}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Juan Gabriel Mazzoleni</title>
			</Head>

			<Header />

			<ScrollToTop />
			<main>
				<ReactFullpage
					navigation
					render={comp =>
						<ReactFullpage.Wrapper>
							{components.map((comp, i) =>
								<div key={i} className='section'>
									{comp}
								</div>)}
						</ReactFullpage.Wrapper>
					}
				/>
			</main>
		</div >
	)
}
