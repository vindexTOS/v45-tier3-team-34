import React, { useRef } from "react";
import useOutClick from "../../hooks/useOutClick";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import { UseMainContext } from "../../context";

const User_Portfolio_Single = () => {
  const { PortfolioState } = UseMainContext();
  const { project_id } = useParams();
  let singleProject =
    PortfolioState?.userProjects?.projects?.find(
      (val: any) => val._id === project_id
    );
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement | null>(null);
  const navigateOut = () => {
    navigate(
      `/Developer/${singleProject.user_id}`
    );
  };
  useOutClick(ref, navigateOut);

  // if (!singleProject) {
  //   return <div>
  //     no project !!!
  //   </div>
  // }

  //dummy data
  singleProject = {
    _id: {
      $oid: "64e5d215edaa50d485169ab1",
    },
    user_id: "64e485dba769e37c749933c5",
    title: "PC market",
    description:
      "Post their own orders for computer components. Search for orders posted by other users. View the details of a specific order. Buy an order. Sell an order. Manage their profile and view their own orders. Technologies The PC Market App is built using the following technologies:",
    date: "2023-08-15T09:30:18.000Z",
    photo:
      "https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/connect-dev%2Fimage_large.jpg?alt=media&token=b4b2153c-4295-4978-a4e9-7329c94e7658",
    github: "",
    liveLink: "https://pcmarket.netlify.app/",
    videoLink: "cool",
    skills_used: [
      "HTML",
      "CSS",
      "JavaScript",
      "Express.js",
      "React",
    ],
    __v: 0,
  };

  const {
    date,
    description,
    github,
    liveLink,
    photo,
    skills_used,
    title,
    videoLink,
  } = singleProject;

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center backdrop-blur-md bg-gray-300/40">
      <div
        ref={ref}
        className="bg-white w-[800px]  rounded-lg p-6 shadow-xl overflow-hidden"
      >
        <h2 className="text-2xl font-semibold mb-4">
          {title}
        </h2>
        <div className="flex flex-col mb-4 py-10 items-center gap-10">
          <img
            src={photo}
            alt="Project"
            className=" w-[500px] h-[400px] object-cover mr-4 rounded transition-transform transform hover:scale-150 hover:z-50"
          />
          <div>
            <p className="mb-2 text-muted">
              Date: {date}
            </p>
            <p className="mb-2">{description}</p>
            <p className="mb-2 text-muted">
              Skills Used:{" "}
              {skills_used.join(", ")}
            </p>
            <p className="mb-2">
              <a
                href={github}
                className="text-blue-500 hover:underline"
              >
                Github Repo
              </a>
            </p>
            {liveLink && (
              <p className="mb-2">
                <a
                  href={liveLink}
                  className="text-blue-500 hover:underline"
                >
                  Live Link
                </a>
              </p>
            )}
          </div>
        </div>
        {videoLink && (
          <div className="text-muted">
            <h4 className="text-lg font-semibold mb-2">
              Video Demo
            </h4>
            <iframe
              title="Video Demo"
              width="100%"
              height="315"
              src={videoLink}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default User_Portfolio_Single;
