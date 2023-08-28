import { useParams } from 'react-router-dom'
import CategoryHero from '../components/CategoryPage/Hero/CategoryHero';
import TrustedCompany from '../components/CategoryPage/TrustedBy/TrustedCompany';
import ProjectsContainer from '../components/CategoryPage/Projects/Projectscontainer';

const CategoryPage = () => {
  const params = useParams();
  //may be changed with category id , or samething else
  const { categoryType } = params;
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
        id={categoryType??''}
      />
    </div>
  )
}

export default CategoryPage