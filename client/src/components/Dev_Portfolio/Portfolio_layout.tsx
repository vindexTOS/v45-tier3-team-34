import React from 'react'

const Portfolio_layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[70%] py-2   max-h-[2000px] px-5 rounded-[9px] flex items-center  justify-center outline outline-[1px] outline-gray-400 max_850:w-[99%]">
      {children}
    </div>
  )
}

export default Portfolio_layout
