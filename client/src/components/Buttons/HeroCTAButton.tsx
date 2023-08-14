import { Link } from "react-router-dom"

const HeroCTAButton = ({ title, color }: {
    title: string,
    color:"red"|"white",
}) => {
  return (
    <Link to={'/'} className={`px-6 py-3 ${color=="red"?"bg-red-600 hover:bg-red-700 text-white":"text-black hover:bg-gray-200"} shadow-lg rounded-md font-bold text-sm`}>
      {title}
    </Link>
  )
}

export default HeroCTAButton
