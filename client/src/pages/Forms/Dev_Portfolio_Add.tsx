// import React from 'react'
import Portfolio_Navigation from "../../components/Dev_Portfolio/Portfolio_Navigation";
import {
  Outlet,
  useNavigate,
} from "react-router-dom";
import Portfolio_layout from "../../components/Dev_Portfolio/Portfolio_layout";
import Succsess from "../../components/Status/Success";
import { UseMainContext } from "../../context";
import Error from "../../components/Status/Error";
import LoadingComponent from "../../components/Status/Loading";
import LoginRegButton from "../../components/Buttons/LoginRegButton";
const Dev_Portfolio_Add = () => {
  const navigate = useNavigate();
  const {
    statusState,
    UserState,
    PortfolioState,
  } = UseMainContext();
  const style = {
    mainDiv: ` w-[100vw] max_xl:w-[100%] py-60 flex flex-col  `,
    header: `text-gray-500 max_sm:hidden max_xml:text-[1rem]  flex items-center justify-center gap-2 font-bold text-[2rem]`,
    skip: `flex text-white text-[1.5rem] max_xml:text-[14px] items-center bg-blue-500 hover:bg-blue-400 cursor-pointer px-7 rounded-[1.5rem] text-ceneter`,
    section: `flex  gap-4  items-start  justify-center py-20  max_xl1500:px-0 px-80 max_xl:px-0 max_xl:w-[100%]`,
  };
  if (
    UserState.userData.user &&
    UserState.userData.user._id
  ) {
    return (
      <div className={style.mainDiv}>
        <h1 className={style.header}>
          You can
          <span
            onClick={() => navigate("/profile")}
            className={style.skip}
          >
            skip
          </span>
          this step and come back any time to add
          more projects
        </h1>
        <span
          onClick={() => navigate("/profile")}
          className="sm:hidden bg-blue-400 hover:bg-blue-300 cursor-pointer text-[2rem] text-white p-5 w-[90%] ml-5 rounded-[40px]"
        >
          Skip
        </span>
        <section className={style.section}>
          <Portfolio_Navigation />
          <Portfolio_layout>
            <Outlet />
          </Portfolio_layout>
        </section>
        <Succsess success={statusState.success} />
        <Error error={statusState.error} />
      </div>
    );
  } else {
    return (
      <div>
        <LoginRegButton />
      </div>
    );
  }
};

export default Dev_Portfolio_Add;
