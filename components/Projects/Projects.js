import uniqid from 'uniqid'
import ProjectCard from './ProjectCard/ProjectCard'
import css from './Projects.module.css'

const Projects = (props) => {

	const { projects } = props

	if (!projects.length) return null

	return (
		<section id='experience' className={css.projects}>
			<div className={css.container}>
				<h2 className='section__title'>Products, &nbsp; Experience, &nbsp; Projects</h2>
				<div className={css.cards}>
					{projects.map((project, i) => (
						<ProjectCard key={i} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
