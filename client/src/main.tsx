import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ContextProvider } from './context.tsx'
//del hash router , updated with createBrowserRouter in App
// import { HashRouter } from 'react-router-dom'
import App from './App.tsx'

//routes

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <HashRouter> */}
    <ContextProvider>
      <App />
    </ContextProvider>
    {/* </HashRouter> */}
  </React.StrictMode>,
)
