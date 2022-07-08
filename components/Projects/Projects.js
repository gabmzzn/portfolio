import uniqid from 'uniqid'
import ProjectCard from './ProjectCard/ProjectCard'
import css from './Projects.module.css'

const Projects = (props) => {

	const { projects } = props

	if (!projects.length) return null

	return (
		<section id='experience' className="dark">
			<div className='content'>
				<h2>Experience</h2>
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
