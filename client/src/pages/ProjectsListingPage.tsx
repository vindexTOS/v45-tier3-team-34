import { useParams } from 'react-router-dom'
import CategoryHero from '../components/ProjectsListingPage/Hero/CategoryHero';
import TrustedCompany from '../components/ProjectsListingPage/TrustedBy/TrustedCompany';
import ProjectsContainer from '../components/ProjectsListingPage/Projects/Projectscontainer';

const ProjectsListingPage = () => {
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

export default ProjectsListingPage