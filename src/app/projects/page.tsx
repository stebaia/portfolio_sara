import ProjectItems from '@/components/projects'
import {projects} from '@/projects/projects'
import Center from '@/components/center'

const ProjectsPage = () => {

	return (
		<Center>
		  <ProjectItems items={projects} />
		</Center>
	)
}

export default ProjectsPage;

