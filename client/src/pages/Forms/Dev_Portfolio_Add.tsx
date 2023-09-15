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
    mainDiv: ` w-full flex flex-col  `,
    header: `text-gray-500 max_sm:hidden   flex items-center justify-center gap-2 font-semibold text-lg`,
    skip: `flex text-secondary text-lg  items-center bg-accent cursor-pointer px-7 rounded-xl text-ceneter`,
    section: `flex  gap-4  items-start  justify-center py-4  max_xl1500:px-0 px-80 max_xl:px-0 max_xl:w-[100%]`,
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
