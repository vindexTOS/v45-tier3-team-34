import React, { useRef, useEffect } from 'react'
import { UseMainContext } from '../../context'
import { skills } from '../../assets/front-end-data/skills_array'
import useOutClick from '../../hooks/useOutClick'
const SkillSelection = () => {
  const { PortfolioState, PortfolioDispatch } = UseMainContext()
  const style = {
    skills: `flex flex-col justify-center gap-10 items-center w-[100%]  max_smm:h-[200px]   `,
    skillInputWrapper: `flex items-center justify-center w-[100%] h-[100%]   max_lg:w-[50%] max_smm:flex-col max_smm:w-[100%] max_smm:gap-0`,
    skillsDiv: `flex gap-2 w-full md:w-[95%] flex-wrap    bg-green-200/10 dark:bg-slate-800 shadow-md p-2 rounded-md  z-20 border border-gray-600/20 dark:border-gray-600/50`,
    singleSkill: ` cursor-pointer hover:bg-green-800 hover:dark:bg-green-500 text-gray-700 hover:dark:text-gray-800 dark:text-gray-300  hover:text-white shadow-md text-gray-400 p-2 rounded-md bg-white dark:bg-slate-700`,
    addBtn: `outline outline-2 outline-green-500 rounded-[8px] w-[9rem] h-[2.5rem] mt-5 text-white bg-green-300`,
  }
  const [search, setSearch] = React.useState<string>('')
  const [openSearch, setOpenSearch] = React.useState<boolean>(false)
  const addSkill = () => {
    if (PortfolioState.skill) {
      PortfolioDispatch({ type: 'technologies', payload: PortfolioState.skill })
      PortfolioDispatch({ type: 'skill', payload: '' })
      setSearch('')
      setOpenSearch(false)
    }
  }
  const RemoveSkill = (i: number) => {
    const newArr = PortfolioState.technologies.filter(
      (_val, index) => index !== i,
    )

    PortfolioDispatch({ type: 'technologies-removed', payload: newArr })
  }
  const skillDropRef = useRef()
  const hanndleCloseDown = () => {
    setOpenSearch(false)
  }
  const dropDownRef = React.useRef<HTMLDivElement | null>(null)

  useOutClick(dropDownRef, hanndleCloseDown)

  useEffect(() => {
    addSkill()
  }, [PortfolioState.skill])
  return (
    <div ref={dropDownRef} className={style.skills}>
      <div className={style.skillInputWrapper}>
        <div className="  w-full  relative px-3 max_850:w-[100%] ">
          <label
            className="block uppercase tracking-wide text-gray-700 dark:text-gray-400 text-[10px]   mb-2"
            htmlFor="skill"
          >
            Technologies Used
          </label>
          <input
            value={search}
            onClick={() => setOpenSearch(!openSearch)}
            onChange={(e) => {
              setSearch(e.target.value)
              // PortfolioDispatch({ type: 'skill', payload: e.target.value })
            }}
            id="skill"
            type={'text'}
            placeholder={'Add technologies used one by one'}
            className="appearance-none block w-full rounded-sm bg-white dark:bg-slate-800 shadow-md  text-gray-700 border-gray-600/20 dark:border-gray-600/50   py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          {openSearch && (
            <div className="w-[95%] z-50 overflow-y-scroll h-[120px] flex flex-col p-2 text-gray-700 dark:text-gray-300  bg-white dark:bg-slate-700/95 shadow-md rounded-[2px] absolute">
              {skills
                .filter((filtval: string) => {
                  if (search === '') {
                    return filtval
                  } else if (
                    filtval.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return filtval
                  }
                })
                .map((val: string) => (
                  <p
                    className="hover:bg-gray-200 p-1 cursor-pointer hover:text-white"
                    onClick={() => {
                      setOpenSearch(false),
                        PortfolioDispatch({ type: 'skill', payload: val })
                    }}
                    key={val}
                  >
                    {val}
                  </p>
                ))}
            </div>
          )}
        </div>
        {/* <button
          className={style.addBtn}
          type="button"
          onClick={() => addSkill()}
        >
          ADD SKILL
        </button> */}
      </div>
      {PortfolioState.technologies.length >= 1 && (
        <div className={style.skillsDiv}>
          {PortfolioState.technologies.map((val, i) => {
            return (
              <div
                title="remove"
                onClick={() => RemoveSkill(i)}
                key={i}
                className={style.singleSkill}
              >
                {val}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SkillSelection
