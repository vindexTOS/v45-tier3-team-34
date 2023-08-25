import { useParams } from 'react-router-dom'
import CategoryHero from '../components/CategoryPage/Hero/CategoryHero';

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

      {/* projects */}
    </div>
  )
}

export default CategoryPage