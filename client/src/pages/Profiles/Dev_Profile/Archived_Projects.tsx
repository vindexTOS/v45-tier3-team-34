import axios from "axios";
import React, {
  useEffect,
  useState,
} from "react";
import { UseMainContext } from "../../../context";

const Archived_Projects = () => {
  const { isUserLoggedIn, UserState } =
    UseMainContext();

  const [data, setData] = useState<any>([]);

  const GetArchivedProjects = async () => {
    try {
      if (isUserLoggedIn) {
        const res = await axios.get(
          `${
            import.meta.env.VITE_GLOBAL_URL
          }/application/archived-dev/${
            UserState.userData.user._id
          }`
        );

        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetArchivedProjects();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center  text-muted w-[500px] h-[300px] lg:w-[800px] lg:h-[300px]">
      <svg
        className="w-16 h-16 mb-4 text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m0-16s-8 0-8 8h16c0-8-8-8-8-8z"
        />
      </svg>
      <div className="text-[0.9rem] font-semibold px-4">
        You have no archived projects
      </div>
    </div>
  );
};

export default Archived_Projects;
