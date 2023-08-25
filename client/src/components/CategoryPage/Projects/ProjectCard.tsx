import { useState } from 'react'
import { ProjectCardType } from '../../../common.types'
import { Link } from 'react-router-dom'
import RatesStars from './RatesStars'
import { AiTwotoneHeart } from "react-icons/ai";

const ProjectCard = ({ data }: { data: ProjectCardType }) => {
    const [isLinked, setIsLinked] = useState(false);
  return (
      <article
          className='max-w-md border bg-white border-gray-300 dark:border-slate-900 dark:bg-slate-800 rounded-lg p-2 flex flex-col shadow-md hover:shadow-xl'
          //to={'/project/' + data.id}
      >
          <div className={`w-full h-64 rounded-md p-0 m-0 bg-[url("${data.img}")]`}>
              <img className='w-full h-full ' src={ data.img} alt={data.title.slice(0,2)}  />
          </div>

          {/* desc */}
          <div className='max-w-sm px-4 flex flex-col gap-6'>
              {/* reviews */}
                  <RatesStars num={data.stars} reviews={data.reviews} />
              {/* title */}
              <h1
                  className='text-2xl font-semibold text-slate-800 dark:text-green-400 capitalize'
              >{data.title}</h1>
              {/* description */}
              <p
                  className='text-gray-700 dark:text-gray-200'
              >{data.description.slice(0, 96)}...</p>
              {/* price and linke */}
              
              <div className=' dark:text-gray-200 flex justify-between py-4'>
                  {/* price */}
                  <p className='flex items-center'>
                      <span className='text-2xl text-slate-800 dark:text-green-700 font-extrabold'>${data.price}/</span>project Budjet
                  </p>
                  {/* like btn */}
                  <button
                      //may (have to be chnged too)
                      onClick={()=>setIsLinked(prev=>!prev)}
                      className={`${isLinked ? 'bg-orange-200 dark:bg-orange-800 text-orange-500 dark:text-orange-200 ' : 'bg-slate-300 dark:bg-slate-700 text-slate-500  '} text-2xl p-3 rounded-md `}>
                          <AiTwotoneHeart  />
                  </button>
              </div>
          </div>
    </article>
  )
}

export default ProjectCard