import React from "react";
import InputFieldGeneral from "../Forms/InputFieldGeneral";
import DatePicker from "react-datepicker";
import Portfolio_Buttons from "./Portfolio_Buttons";
import "react-datepicker/dist/react-datepicker.css";
import { UseMainContext } from "../../context";
import Error from "../Status/Error";
const Portfolio_title = () => {
  const { PortfolioState, PortfolioDispatch } =
    UseMainContext();
  const style = {
    section: `flex flex-col items-start justify-around h-fit min-h-[500px] w-full `,
    mainHeader: `text-sm font-semibold text-gray-700`,
    DatePicker: `appearance-none block max_850:w-[100%]  ml-3   rounded-[9px] bg-white text-gray-700 border border-gray-200   py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`,
  };
  return (
    <section className={style.section}>
      <Error error={PortfolioState.error} />
      <h1 className={style.mainHeader}>
        Add porfolio project
      </h1>
      <InputFieldGeneral
        label={`Project Title`}
        placeholder="Enter a brief but descriptive title"
        dispatch={PortfolioDispatch}
        state={PortfolioState}
        dispatchType="title"
        stateType="title"
      />

      <div className="text-muted w-[50%] max_850:w-[100%] px-5 text-[14px]">
        <p className="text-gray-800 font-medium ">
          Related DevConnect Job (optional)
        </p>
        <p>
          Once you've completed contracts on
          DevConnect, you'll be able to link your
          work.
        </p>
      </div>
      <div className="flex flex-col items-start justify-around gap-2  max_850:w-[100%]  ">
        <p className="font-bold text-[12px] ml-3  text-gray-500 ">
          Completion Date (optional)
        </p>
        <DatePicker
          className={style.DatePicker}
          selected={PortfolioState.date}
          onChange={(
            date: React.SetStateAction<Date>
          ) =>
            PortfolioDispatch({
              type: "date",
              payload: date,
            })
          }
        />
      </div>
      <Portfolio_Buttons
        nextbtn="Go to Add Details"
        link="/dev_project_add/details"
        backbtn="Cancel"
        cancelToken="cancel"
      />
    </section>
  );
};

export default Portfolio_title;
