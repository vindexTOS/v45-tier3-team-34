import React from 'react'
import { useLocation, Link } from 'react-router-dom'
type navArrayType = {
  title: string
  link: string
}

const Portfolio_Navigation = () => {
  const routerLocation = useLocation()

  const navArray = [
    { title: 'Add portfolio project', link: 'title' },
    { title: 'Add details', link: 'details' },
    { title: 'Preview', link: 'preview' },
  ]

  const style = {
    nav: ` p-1 flex flex-col gap-2 max_850:hidden `,
  }

  return (
    <nav className={style.nav}>
      {navArray.map((val: navArrayType) => (
        <div
          className={` ${
            routerLocation.pathname === `/dev_project_add/${val.link}`
              ? 'bg-red-600 text-white'
              : 'text-gray-500'
          }    p-2 px-10 rounded-[9px] text-start  `}
          key={val.title}
        >
          {val.title}
        </div>
      ))}
    </nav>
  )
}

export default Portfolio_Navigation
