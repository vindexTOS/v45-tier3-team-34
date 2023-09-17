import React, { useState } from "react";
import Portfolio_layout from "../../components/Dev_Portfolio/Portfolio_layout";
import InputFieldGeneral from "../../components/Forms/InputFieldGeneral";
import TextAreaGeneral from "../../components/Forms/TextAreaGeneral";
import { UseMainContext } from "../../context";
import SkillSelection from "../../components/Forms/SkillSelection";
import axios from "axios";
import { globalUrl } from "../../global-vars/Api-url";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Status/Error";
import Succsess from "../../components/Status/Success";
import LoadingComponent from "../../components/Status/Loading";
export default function Company_info_form() {
  const {
    setError,
    setSuccess,
    statusState,
    CompanyDispatch,
    UserState,
    CompanyState,
  } = UseMainContext();
  const style = {
    mainDiv: ` w-[100vw] gap-3 max_xl:w-[100%] py-60 flex flex-col  items-center `,
    header: `text-gray-500 max_sm:hidden max_xml:text-[1rem]  flex items-center justify-center gap-2 font-bold text-[2rem]`,
    skip: `flex text-white text-[1.5rem] max_xml:text-[14px] items-center bg-blue-500 hover:bg-blue-400 cursor-pointer px-7 rounded-[1.5rem] text-ceneter`,
    btnWrapper: `w-[100%] flex justify-around py-4`,
  };

  const [loading, setLoading] =
    useState<boolean>(false);

  const {
    companyName,
    summary,
    linkedin,
    website,
    hrPay,
  } = CompanyState;
  const handleUpdateUserInfo = async () => {
    if (
      UserState.userData.user &&
      UserState.userData.user._id
    ) {
      setLoading(true);
      try {
        const data = await axios.patch(
          `${
            import.meta.env.VITE_GLOBAL_URL
          }/company/info/${
            UserState.userData.user._id
          }`,
          {
            companyName,

            summary,

            linkedin,
            website,
            hrPay,
          }
        );
        setSuccess(data.data.msg);
        navigate("/company_profile");

        setLoading(false);
      } catch (error) {
        const err: any = error;

        setError(err.response.data.msg);
        setLoading(false);
      }
    }
  };
  const navigate = useNavigate();

  return (
    <div className={style.mainDiv}>
      <h1 className={style.header}>
        Tell us more about you
      </h1>
      <p className={style.header}>
        you can{" "}
        <span
          className={style.skip}
          onClick={() => navigate("/profile")}
        >
          skip
        </span>
        this part and fill out later
      </p>
      <Portfolio_layout>
        <section className="w-[100%]">
          <InputFieldGeneral
            label={`Company name`}
            placeholder="Ex. Jon"
            dispatch={CompanyDispatch}
            state={CompanyState}
            dispatchType="companyName"
            stateType="SET_COMPANY_NAME"
          />

          <TextAreaGeneral
            label={`Talk about you`}
            placeholder="Enter a brief descritpion about yourself"
            dispatch={CompanyDispatch}
            state={CompanyState}
            dispatchType="SET_SUMMARY"
            stateType="summary"
          />

          <InputFieldGeneral
            label={`Linkedin`}
            placeholder="https://www.linkedin.com/"
            dispatch={CompanyDispatch}
            state={CompanyState}
            dispatchType="SET_LINKEDIN"
            stateType="linkedin "
          />
          <InputFieldGeneral
            label={`Personal Website`}
            placeholder="https://www.company-website.com/"
            dispatch={CompanyDispatch}
            state={CompanyState}
            dispatchType="SET_WEBSITE"
            stateType="website "
          />
          <InputFieldGeneral
            label={`hourly rate expectation`}
            placeholder="5.0$"
            dispatch={CompanyDispatch}
            state={CompanyState}
            dispatchType="SET_HR_PAY"
            stateType="hrPay"
            type="number"
          />

          <div className={style.btnWrapper}>
            <button
              onClick={() => navigate("/profile")}
              className="bg-blue-500  px-10 p-2 rounded-[10px] text-white"
            >
              Skip
            </button>
            <button
              className="bg-primary px-10 p-2 rounded-[10px] text-white"
              onClick={handleUpdateUserInfo}
            >
              Save info
            </button>
          </div>
        </section>
      </Portfolio_layout>
      <Error error={statusState.error} />
      <Succsess success={statusState.success} />
      <LoadingComponent loading={loading} />
    </div>
  );
}
