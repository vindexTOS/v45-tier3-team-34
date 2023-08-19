import { MdStars } from "react-icons/md";
import { HiStar } from "react-icons/hi";
import { BsFillAwardFill } from "react-icons/bs";
import { why_us } from "../../../contants"

const WhyUs = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-x-3 sm:mt-8 sm:mb-4">
          <article className="bg-green-100 dark:bg-slate-800 text-green-900 dark:text-green-200 p-8 rounded-b-none lg:rounded-b-lg rounded-lg flex gap-2 flex-col ">
            <h1 className="text-4xl md:text-8xl font-bold dark:text-green-300">Why businesess turn to devConnect</h1>
            <div className="flex flex-col gap-y-4">
                {
                    why_us.map(({ title, description }) => (
                        <div key={title}>
                            <h1 className="text-2xl font-semibold flex gap-2 items-center dark:text-gray-300">
                                <span className="text-xl">
                                    <MdStars/>
                                </span>
                                
                                {title}</h1>
                            <p className="ml-6 md:max-w-md lg:max-w-lg text-xl font-light mt-2">{description}</p>
                        </div>
                    ))  
                }
            </div>
          </article>
          {/* problem ??? */}
          {/* <article className="bg-[url('assets/img/why_us_img.png')] border min-w-[500px] bg-center bg-contain bg-no-repeat "></article> */}
          <article className="flex items-end p-8 text-white bg-green-600 dark:bg-green-700 rounded-t-none sm:rounded-lg lg:rounded-t-lg">
              <div>
                  <h1 className="text-3xl font-semibold">
                    We’re
                    the world’s work
                    marketplace
                  </h1>
                  {/* others features */}
                  <div className="">
                      <h2 className="flex items-center text-xl font-normal gap-2">
                          <span className="text-4xl">
                            <HiStar />
                          </span>
                          4.9/5</h2>
                          <p className="font-thin ml-12">Clients rate professionals on Upwork
                        </p>
                  </div>
                  <div className="">
                      <h2 className="flex items-center text-xl font-normal gap-2">
                          <span className="text-3xl">
                            <BsFillAwardFill />
                          </span>
                          Award winner</h2>
                          <p className="font-thin ml-12">G2’s 2021 Best Sofrware Awards
                        </p>
                  </div>
              </div>
          </article>
    </section>
  )
}

export default WhyUs