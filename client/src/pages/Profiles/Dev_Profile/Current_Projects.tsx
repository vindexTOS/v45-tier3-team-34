import { useEffect, useState } from "react";
import { ApplicationType } from "../../../common.types";
import { UseMainContext } from "../../../context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../../components/Status/Loading";
import Error from "../../../components/Status/Error";
import Succsess from "../../../components/Status/Success";
const Current_Projects = () => {
  const {
    UserState,
    isUserLoggedIn,
    statusState,
    setError,
    setSuccess,
  } = UseMainContext();

  const [progressProject, setProjectProgress] =
    useState<ApplicationType[]>();

  const GetInProgress = async () => {
    try {
      if (isUserLoggedIn) {
        const res = await axios.get(
          `${
            import.meta.env.VITE_GLOBAL_URL
          }/application/inprogressDev/${
            UserState.userData.user._id
          }`
        );

        const data = res.data;
        setProjectProgress(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // /dev-reject-finnish/
  const [loading, setLoading] = useState(false);
  const FinishProject = async (
    application_id: string
  ) => {
    try {
      if (isUserLoggedIn) {
        setLoading(true);
        const res = await axios.get(
          `${
            import.meta.env.VITE_GLOBAL_URL
          }/dev-reject-finnish/${application_id}`
        );
        setSuccess(res.data.msg);
        setLoading(false);
      }
    } catch (error) {
      const err: any = error;
      setError(err.messages);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetInProgress();
  }, []);
  const navigate = useNavigate();

  if (
    progressProject &&
    progressProject.length > 0
  ) {
    return (
      <div className="flex dark:text-white flex-col gap-2 p-2 items-center justify-center relative w-[1000px] laptop:w-[100%]  max_xl1500:w-[900px]  max_xl:w-[700px] max_lg:w-[100%]">
        <LoadingComponent loading={loading} />
        <Error error={statusState.error} />
        <Succsess success={statusState.success} />
        {progressProject.map(
          (val: ApplicationType) => (
            <div
              key={val._id}
              className="border border-gray-300 rounded p-4 shadow-md "
            >
              {" "}
              {val.projectFinnished ? (
                <span className="ml-auto px-2 py-1 bg-primary text-white rounded-full text-xs">
                  Finished
                </span>
              ) : (
                <span className="ml-auto px-2 py-1 bg-ddestructive text-white rounded-full text-xs">
                  Not Finished
                </span>
              )}
              <h2 className="text-xl font-semibold">
                {val.applicationProject.title}
              </h2>
              <p className="text-sm text-gray-500">
                Company ID: {val.company_id}
              </p>
              <p className="text-sm text-gray-500">
                Developer ID: {val.dev_id}
              </p>
              {val.applicationProject.image && (
                <img
                  onClick={() =>
                    navigate(
                      `/company/projects/${val.project_id}`
                    )
                  }
                  src={
                    val.applicationProject.image
                  }
                  alt={
                    val.applicationProject.title
                  }
                  className="mt-2 rounded cursor-pointer"
                />
              )}
              <div className="mt-4 flex items-center justify-around">
                {val.userInfo && (
                  <div className="flex items-center space-x-2">
                    <img
                      src={val.userInfo.avatar}
                      alt={val.userInfo.userName}
                      className="w-8 h-8 rounded-full"
                    />
                    <p className="text-sm">
                      {val.userInfo.userName}
                    </p>
                  </div>
                )}
                <button
                  onClick={() =>
                    FinishProject(val._id)
                  }
                  className="bg-primary px-2 rounded-[9px]  "
                >
                  Finish
                </button>
              </div>
            </div>
          )
        )}
      </div>
    );
  } else {
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
          You have no current projects
        </div>
      </div>
    );
  }
};

export default Current_Projects;
