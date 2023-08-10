import {ReactElement} from 'react'
const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
        <nav>here the nav</nav>
          {children}
        <footer>footer here</footer>
    </div>
  )
}

export default Layout
