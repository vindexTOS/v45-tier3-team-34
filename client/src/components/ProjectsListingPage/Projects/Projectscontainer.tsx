import React, {
  useState,
  useEffect,
} from "react";
import { dummy_projects } from "./dummy-data";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { ProjectCardType } from "../../../common.types";

const ProjectsContainer = ({
  id,
}: {
  id: string;
  //projects?: any[]
}) => {
  const [projects, setProjects] = useState<any>();
  const GetAllProjects = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_GLOBAL_URL
        }/companies/projects`
      );

      console.log(res.data);
      setProjects(res.data.projectsData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetAllProjects();
  }, []);
  if (projects && projects.length > 0) {
    return (
      <div className="my-10">
        <section className="my-5">
          <h1 className="text-[1.5rem] font-semibold text-primary dark:text-primary">
            Browse available projects
          </h1>
          <p className="text-[1rem] font-light text-light-muted dark:text-dark-muted">
            Currently{" "}
            <span className="text-primary font-semibold hover:underline cursor-pointer">
              {projects.length} Projects
            </span>{" "}
            are open
          </p>
        </section>
        {/* projects listing */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between">
          {projects.map(
            (project: ProjectCardType) => (
              <ProjectCard
                data={project}
                key={project.project._id}
              />
            )
          )}
        </section>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default ProjectsContainer;
