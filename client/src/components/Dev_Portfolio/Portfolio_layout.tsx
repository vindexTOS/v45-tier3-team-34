import React from 'react'

const Portfolio_layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[70%]  px-5 rounded-[9px] outline outline-[1px] outline-gray-400 max_850:w-[99%]">
      {children}
    </div>
  )
}

export default Portfolio_layout
