import { Link } from 'react-router-dom'
import { footer_links } from '../../contants'
import { useLocation } from 'react-router-dom'
export default function Footer() {
  const location = useLocation()
  return (
    <footer
      className={`  bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-400 px-12 py-2 md:rounded-lg ${
        location.pathname === '/login' || location.pathname === '/register'
          ? 'hidden'
          : ''
      }`}
    >
      <section className="h-10"></section>
      <section className="flex justify-between flex-col-reverse md:flex-row items-center border-t-2 border-t-gray-700 py-1 gap-y-2">
        <article className="border-t border-t-gray-800 w-full sm:w-fit text-center md:border-none">
          <h2>© 2023 DevConnect</h2>
        </article>
        <article className="flex flex-wrap items-center justify-center gap-4 p-2 font-thin">
          {footer_links.map(({ title, link }) => (
            <Link key={title} className="min-w-fit" to={link}>
              {title}
            </Link>
          ))}
        </article>
      </section>
    </footer>
  )
}
