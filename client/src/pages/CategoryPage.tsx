import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
  const params = useParams();
  //may be chnged with category id , or samething else
  const { categoryType } = params;
  return (
    <div
      className='px-4'
    >
      {/* ctegories list */}

      {/* hero */}

      {/* trusted by coompanies */}

      {/* projects */}
    </div>
  )
}

export default CategoryPage