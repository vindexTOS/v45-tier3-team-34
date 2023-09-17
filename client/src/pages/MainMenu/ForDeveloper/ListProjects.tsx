// import React from "react";

import axios from "axios";
import { UseMainContext } from "../../../context";
import { useEffect } from "react";
import { ProjectCardType } from "../../../common.types";
import ProjectCard from "../../../components/ProjectsListingPage/Projects/ProjectCard";
import NeedDevCard from "./NeedDevCard";
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
      setCompanyProjectsData(
        res.data.projectsData
      );
      console.log(res.data);
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
      <div className="">
        <NeedDevCard />
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between my-20">
          {companyProjectsData.map(
            (val: ProjectCardType) => {
              return (
                <ProjectCard
                  data={val}
                  key={val._id}
                />
              );
            }
          )}
        </section>
      </div>
    );
  } else {
    return <div>Loading..</div>;
  }
}
