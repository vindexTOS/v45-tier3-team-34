import { Link } from "react-router-dom"


const FindTalent = () => {
  return (
      <section className="flex ">
          <article className="bg-[url('/assets/img/find_client.png')] flex-1 bg-no-repeat bg-cover bg-center rounded-l-lg">
          </article>
          {/* right section */}
          <article className="bg-blue-600 dark:bg-slate-800 sm:rounded-r-lg  text-white p-4 sm:p-8 flex flex-col gap-12 sm:gap-24 min-h-[550px]">
              
              <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-thin">For client</h3>
                  <h1 className="text-4xl md:text-6xl font-bold max-w-lg">Find a great worker</h1>
                <p className="text-2xl max-w-md">
                    Meet clients you’re excited to work with and take <br />
                    your career or business to new heights.
                </p>
              </div>
              {/* second section */}
              <div>
                  {/* list */}
                  <div className="flex justify-between flex-wrap gap-4 border-t-2 border-t-blue-400 dark:border-t-slate-600 py-8 h-auto">
                      <p className="max-w-xs">Find opportunities for every stage of your freelance career</p>
                      <p className="max-w-xs">Control when, where, and how you work</p>
                      <p className="max-w-xs">Explore different ways to earn</p>
                  </div>
                  {/* opportunity btn link */}
                  <Link
                      to={'/'}
                      className="bg-white dark:border-blue-400 text-blue-700 dark:text-slate-800
                      px-6 py-4 rounded-full shadow-md hover:shadow-blue-800  dark:hover:shadow-blue-500  hover:underline cursor-pointer
                      mb-10"
                  >
                    Find Opportunities
                  </Link>
              </div>
          </article>
    </section>
  )
}

export default FindTalent