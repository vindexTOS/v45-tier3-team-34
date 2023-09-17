import React from 'react'
import { Link } from 'react-router-dom'

export default function NotLogged({ text }: { text: string }) {
  return (
    <div className=" dark:bg-gray-800 dark:text-white  bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">You are not logged in</h1>
      <p className="text-gray-600 mb-6 dark:text-white">{text}</p>
      <div className="flex justify-between">
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Log In
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Register
        </Link>
      </div>
    </div>
  )
}
