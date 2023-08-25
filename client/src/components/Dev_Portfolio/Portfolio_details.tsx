import React from 'react'
import Portfolio_Buttons from './Portfolio_Buttons'
import InputFieldGeneral from '../Forms/InputFieldGeneral'
import TextAreaGeneral from '../Forms/TextAreaGeneral'
import { UseMainContext } from '../../context'
import SkillSelection from '../Forms/SkillSelection'
import DropeZone from '../Forms/DropeZone'
import Error from '../Status/Error'
import LoadingComponent from '../Status/Loading'
const Portfolio_details = () => {
  const { PortfolioDispatch, PortfolioState , ImgState} = UseMainContext()
  const style = {
    section: `flex flex-col items-start justify-around  gap-2  w-[100%]     `,
    mainHeader: `text-[1.2rem] font-bold text-gray-700`,
  }
  return (
    <section className={style.section}>
      <Error error={PortfolioState.error} />
      <h1 className={style.mainHeader}>Add porfolio project</h1>
      <InputFieldGeneral
        label={`Role`}
        placeholder="Ex.I was the backend developer who did this test"
        dispatch={PortfolioDispatch}
        state={PortfolioState}
        dispatchType="role"
        stateType="role"
      />
      <TextAreaGeneral
        label={`Project Task/Challenge`}
        placeholder="Describe the problem or opportunity you addressed in your project"
        dispatch={PortfolioDispatch}
        state={PortfolioState}
        dispatchType="description"
        stateType="description"
      />
      <DropeZone />
      <LoadingComponent loading={ImgState.imgLoading}/>
      <InputFieldGeneral
        label={`Video Url(optional)`}
        placeholder="Ex. Demo video"
        dispatch={PortfolioDispatch}
        state={PortfolioState}
        dispatchType="video"
        stateType="video"
      />
      <InputFieldGeneral
        label={`github Url(optional)`}
        placeholder="Ex. github repo"
        dispatch={PortfolioDispatch}
        state={PortfolioState}
        dispatchType="github"
        stateType="github"
      />
      <InputFieldGeneral
        label={`Project Url(optional)`}
        placeholder="Ex.hosted web site"
        dispatch={PortfolioDispatch}
        state={PortfolioState}
        dispatchType="liveLink"
        stateType="liveLink"
      />
      <SkillSelection />

      <Portfolio_Buttons
        nextbtn="Go to Preview"
        link="/dev_project_add/preview"
        backbtn="Back"
        cancelToken="back-to-title"
      />
    </section>
  )
}

export default Portfolio_details
