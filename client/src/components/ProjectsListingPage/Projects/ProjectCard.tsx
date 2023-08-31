import { useState } from 'react'
import { ProjectCardType } from '../../../common.types'
import { Link } from 'react-router-dom'
import RatesStars from './RatesStars'
import { AiTwotoneHeart } from 'react-icons/ai'

const ProjectCard = ({ data }: { data: ProjectCardType }) => {
  const [isLinked, setIsLinked] = useState(false)

  const {
    category,
    country,
    description,
    difficulty,
    image,
    price,
    title,
    urgent,
    skills,
  } = data.project

  return (
    <article
      onClick={() => console.log(data.ratings)}
      className="max-w-md border bg-white border-gray-300 dark:border-slate-900 dark:bg-slate-800 rounded-lg p-2 flex flex-col shadow-md hover:shadow-xl "
    >
      {/* ?? a try */}
      {/* <Link to={'/company/projects/' + data._id}> */}
      {/* ?? this image require more stylings  */}
      <div className={`w-full h-64 rounded-md p-0 m-0 bg-[url("${image}")]`}>
        <img
          className="w-full h-full "
          src={image}
          // alt={data.title.slice(0, 2)}
        />
      </div>
      {/* desc */}
      <div className="max-w-sm px-4 flex flex-col gap-6">
        {/* reviews */}
        <RatesStars data={data.ratings} />
        {/* title */}
        <h1 className="text-2xl font-semibold text-slate-800 dark:text-green-400 capitalize">
          {title}
        </h1>
        {/* description */}
        <p className="text-gray-700 dark:text-gray-200">
          {/* {data.description.slice(0, 96)}... */}
        </p>
        {/* price and linke */}
      </div>
      {/* </Link> */}

      {/* price and like btn */}
      <div className=" dark:text-gray-200 flex justify-between p-4">
        {/* price */}
        <p className="flex items-center">
          <span className="text-2xl text-slate-800 dark:text-green-700 font-extrabold">
            ${price}/
          </span>
          project Budjet
        </p>
        {/* like btn add same features if needed */}
        <button
          //may (have to be chnged too)
          onClick={() => setIsLinked((prev) => !prev)}
          className={`${
            isLinked
              ? 'bg-orange-200 dark:bg-orange-800 text-orange-500 dark:text-orange-200 '
              : 'bg-slate-300 dark:bg-slate-700 text-slate-500  '
          } text-2xl p-3 rounded-md `}
        >
          <AiTwotoneHeart />
        </button>
      </div>
    </article>
  )
}

export default ProjectCard
