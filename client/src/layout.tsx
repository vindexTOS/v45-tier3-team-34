import { ReactElement } from 'react'
import Footer from './components/Home/Footer'
import NavBar from './components/Home/NavBar'
const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="sm:px-1 md:px-8 md:py-2 bg-gray-100 dark:bg-gray-900     flex  flex-col justify-between ">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
