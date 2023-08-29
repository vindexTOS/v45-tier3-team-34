import { useParams } from 'react-router-dom'
import CategoryHero from '../components/ProjectsPage/Hero/CategoryHero';
import TrustedCompany from '../components/ProjectsPage/TrustedBy/TrustedCompany';
import ProjectsContainer from '../components/ProjectsPage/Projects/Projectscontainer';

const ProjectsPage = () => {
  const params = useParams();
  //may be changed with category id , or samething else
  const { project_category } = params;
  return (
    <div
      className='px-4'
    >
      {/* ctegories list ?? optional */}

      {/* hero */}
      <CategoryHero/>
      {/* trusted by coompanies */}
      <TrustedCompany/>
      {/* projects */}
      <ProjectsContainer
        //?? --> (id if data will be feached in te component , or projects if projects are feached here)
        id={project_category??''}
      />
    </div>
  )
}

export default ProjectsPage