import { Link } from 'react-router-dom'
import { HiStar } from "react-icons/hi";
const CategoryCard = ({ title, rating, skills, link }: {
    title: string,
    rating: number,
    skills: number,
    link:string,
}) => {
  return (
      <Link to={link}
          className='bg-gray-200 dark:bg-gray-800 dark:text-gray-300 rounded-lg p-4 md:p-8 shadow-md dark:shadow-black hover:shadow-2xl transition-shadow delay-75 min-h-[120px] flex flex-col justify-between'
      >
          <h1 className='text-xl md:text-2xl 2xl:text-3xl font-semibold mb-2'>{title}</h1>
          <div className='flex justify-between text-slate-500'>
              <p className='flex items-center gap-1 '>
                  <span className='text-red-600 text-xl'><HiStar /></span>
                  {rating}/5
              </p>
              <p>{skills}{" "}skills</p>
          </div>
    </Link>
  )
}

export default CategoryCard
