import FindClientcard from './FindClientcard'

const FindClient = () => {
  return (
    <div className="bg-[url('/assets/img/find_client_bg.png')] bg-cover  bg-no-repeat bg-gray-500 bg-fixed md:bg-scroll   sm:rounded-xl  text-white p-2 md:p-8 flex flex-col gap-2 md:gap-y-20 ">
          <section>
              <h1 className='text-sm sm:text-lg capitalize font-light'>For client</h1>
      </section>
        <section className='flex flex-col gap-4 md:gap-10 '>
              <article className='w-full md:max-w-md flex flex-col gap-y-12'>
                  <h1 className='text-3xl md:text-7xl font-bold '>Find talent your way</h1>
                  <p className='text-lg md:text-2xl font-normal'>
                  Work with the largest network of independent professionals and get things done from quick turnarounds to big transformations.
                  </p>
              </article>
              {/* actions */}
              <article className='flex flex-wrap w-full 3xl:w-10/12 gap-6 '>
                  <FindClientcard
                      link='/'
                      title='Post a job and hire a professional'
                      sub_title='Talenta Markeplace'
                  />
                  <FindClientcard
                      link='/'
                      title='Browse and buy some projects'
                      sub_title='Project Catalog'
                  />
                  <FindClientcard
                      link='/'
                      title='Let us help you find the right talent'
                      sub_title='Talenta Scout'
                  />
              </article>
      </section>
    </div>
  )
}

export default FindClient
