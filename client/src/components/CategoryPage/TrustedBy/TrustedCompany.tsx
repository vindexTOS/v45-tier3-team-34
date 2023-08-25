

const TrustedCompany = () => {
  return (
      <section className=" flex flex-col justify-center my-2 items-center">
          <div className="flex flex-col sm:flex-row  gap-12 px-2 dark:bg-slate-800  dark:shadow-gray-900 shadow-sm rounded-md  items-center  max-w-fit">   
            <article>
                <h1 className="text-green-600 text-lg lg:text-xl font-bold ">Trusted by</h1>
            </article>
            <article className="flex gap-x-8 gap-y-4 justify-center items-center flex-wrap sm:flex-nowrap">
                <img className=" w-24 h-10 aspect-video filter " src="/assets/icons/companies/microsoft-img.png" alt="company" />
                <img className=" w-24 h-10 aspect-video filter " src="/assets/icons/companies/airbnb-img.png" alt="company" />
                  <img className="w-24 h- aspect-video filter " src="/assets/icons/companies/bissell-img.png" alt="company" />
                  <img className=" w-24 h-10 aspect-video filter " src="/assets/icons/companies/microsoft-img.png" alt="company" />
                <img className=" w-24 h-10 aspect-video filter " src="/assets/icons/companies/airbnb-img.png" alt="company" />
                <img className="w-24 h- aspect-video filter " src="/assets/icons/companies/bissell-img.png" alt="company" />
                
            </article>
          </div>
    </section>
  )
}

export default TrustedCompany