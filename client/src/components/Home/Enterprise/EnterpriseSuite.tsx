import { Link } from 'react-router-dom'
import { LiaPencilRulerSolid,LiaToolboxSolid,LiaHeadsetSolid } from "react-icons/lia";
const EnterpriseSuite = () => {
  return (
    <section className='flex sm:bg-gray-300 dark:bg-gray-900 dark:text-white sm:rounded-lg my-0 sm:my-6 '>
    <article className='flex-1 p-2 sm:p-8'>
              <h2 className='font-thin text-lg sm:mb-10'>Enterprise Suite</h2>
              <h1 className='text-5xl md:text-6xl font-bold '>This is How{" "}
                  <span className='text-red-600 dark:text-red-300'>
                   Good Companies Find Good Company.
                  </span>
              </h1>
              <p className='text-2xl mt-4'>
                Access the top 1% of talent on Upwork, and a full suite of hybrid workforce management tools.
                <br />This is how innovation works now.
              </p>
              {/* company features */}
              <div className='flex flex-col gap-2 my-4 font-thin'>
                  <p className='flex items-center gap-1 text-xl'><span className='text-2xl text-red-600 dark:text-red-400'><LiaPencilRulerSolid /></span> Access expert talent to fill your skill gaps</p>
                  <p className='flex items-center gap-1 text-xl'><span className='text-2xl text-red-600 dark:text-red-400'><LiaToolboxSolid /></span> Control your workflow: hire, classify and pay your talent</p>
                  <p className='flex items-center gap-1 text-xl'><span className='text-2xl text-red-600 dark:text-red-400'><LiaHeadsetSolid/></span> Partner with Upwork for end-to-end support</p>
              </div>

              {/* link to more, must be changed (and style too) */}
              <Link
                  className='bg-red-600 dark:bg-red-100 text-white dark:text-red-600 px-6 py-3 rounded-full flex align-middle items-start max-w-fit font-normal text-lg hover:shadow-red-300 hover:dark:shadow-red-100 hover:shadow-md '
                  to={'/'}>learn more</Link>
      </article>
          <article className="hidden lg:block bg-[url('./assets/img/enteprise-img.png')]  bg-gray-800 min-w-[500px] bg-no-repeat bg-cover sm:rounded-r-lg">
              
      </article>
    </section>
  )
}

export default EnterpriseSuite
