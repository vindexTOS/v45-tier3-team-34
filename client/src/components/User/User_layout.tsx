import React from 'react'

const User_layout = ({ children }: { children: React.ReactNode }) => {
  const style = {
    main: `outline outline-[1px] outline-gray-300 rounded-[16px]`,
  }
  return <main className={style.main}>{children}</main>
}

export default User_layout
