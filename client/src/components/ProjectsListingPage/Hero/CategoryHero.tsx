import { Link } from 'react-router-dom'

const CategoryHero = () => {
  return (
      <section className='bg-green-600 dark:bg-green-800 text-white flex justify-between flex-col lg:flex-row rounded-lg md:px-5 py-4 gap-y-5'>
          <article className='flex flex-col px-5 gap-y-4 justify-center lg:px-12 '>
              <h1 className='text-4xl md:text-6xl'>
                  <span className='font-bold'>
                      Junior developers
                  </span>
                  <br /> to scale your business
              </h1>
              <p className='text-lg sm:text-xl md:text-2xl max-w-xl font-thin'>
                Hire junior developers to shorten development cycles, and drive product growth.
              </p>
              {/* button or link ?? */}
              <Link
                  //may be changed too ??
                  to={''}
                  className='text-green-600 bg-white text-center py-2 px-4 rounded-full max-w-fit
                  shadow-md hover:shadow-green-950 dark:hover:shadow-green-200 
                  '
              >
                  Get started
              </Link>
          </article>
          <article className="px-5">
              <img
                  className='w-full h-full resize'
                  src="/assets/img/category_hero-img.png" alt="hero" />
          </article>
    </section>
  )
}

export default CategoryHero