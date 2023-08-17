import {useState,useEffect } from "react"

const ThemeToggle = () => {
    const temp = localStorage.getItem('theme') as string;
    const [theme, setTheme] = useState<'light' | 'dark' | string>(temp);
    useEffect(() => {
        if (theme==='dark') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.removeItem('theme');
        }
    },[theme])
  return (
      <button
          className="bg-green-800 p-2 ml-4 rounded-md text-white"
          onClick={()=>setTheme(p=>p==='dark'?'light':'dark')}
      >ThemeToggle</button>
  )
}

export default ThemeToggle