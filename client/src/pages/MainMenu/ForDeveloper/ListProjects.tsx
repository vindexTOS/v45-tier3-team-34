// import React from "react";

import axios from "axios";
import { UseMainContext } from "../../../context";
import { useEffect } from "react";
import { CompanyProjectType } from "../../../common.types";

export default function ListProjects() {
  const {
    companyProjectsData,
    setCompanyProjectsData,
  } = UseMainContext();

  const getAllProjects = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_GLOBAL_URL
        }/companies/projects`
      );
      setCompanyProjectsData(res.data.companies);
      console.log(res.data.companies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  if (
    companyProjectsData &&
    companyProjectsData.length > 0
  ) {
    return (
      <div className="text-xl text-center text-light-muted dark:text-dark-muted transition-all duration-500 delay-100 ease-in-out">
        {companyProjectsData.map(
          (val: CompanyProjectType) => {
            return (
              <div>
                <h1>{val.title}</h1>
                <img src={val.image} />
              </div>
            );
          }
        )}
      </div>
    );
  } else {
    return <div>Loading..</div>;
  }
}
