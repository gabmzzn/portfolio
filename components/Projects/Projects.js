import uniqid from 'uniqid'
import ProjectCard from './ProjectCard/ProjectCard'
import css from './Projects.module.css'

const Projects = (props) => {

	const { projects } = props

	if (!projects.length) return null

	return (
		<section id='projects' className='section projects'>
			<h2 className='section__title'>Products, &nbsp; Experience, &nbsp; Projects</h2>

			<div className={css.grid}>
				{projects.map((project) => (
					<ProjectCard key={uniqid()} project={project} />
				))}
			</div>
		</section>
	)
}

export default Projects
