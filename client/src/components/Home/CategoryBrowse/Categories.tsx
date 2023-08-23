import { Link } from 'react-router-dom'
import { categories_temp } from '../../../contants'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <section className='bg-gray-100 dark:bg-gray-900 dark:text-gray-300 flex flex-col gap-y-4 sm:gap-y-12 p-2 md:p-8 rounded-lg'>
        <article className='flex flex-col gap-y-0'>
              <h1 className='text-3xl md:text-5xl font-semibold'>Browse talent by category</h1>
              <p className='text-lg font-light'>
                  Looking for work? {" "}
                  {/* links to jobs */}
                  <Link
                      className='text-green-600 font-semibold hover:underline cursor-pointer'
                      to={'/'}>browse jobs</Link>
              </p>
          </article>
          {/* categories */}
          <article className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-between'>
              {
                  categories_temp.map(({ title, rating, skills }) => (
                      <CategoryCard
                          //have to be changed
                          
                          link='/'
                          key={title}
                          rating={rating}
                          skills={skills}
                          title={title}
                      />
                  ))
              }
      </article>
    </section>
  )
}

export default Categories
