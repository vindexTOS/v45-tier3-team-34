import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex items-center flex-col  gap-10 justify-center p-10">
      <Link
        className="bg-red-500 text-white hover:bg-red-600 rounded-[5px] p-2"
        to="/login"
      >
        Login
      </Link>
      <h1 className="bg-blue-400 text-white font-bold px-10 py-2">
        HELLO WORLD
      </h1>
    </div>
  )
}

export default Home
