import {
  Link,
  useParams,
} from "react-router-dom";
import {
  dummy_project,
  dummy_project_publisher,
} from "./dummy_project";
import {
  BiSolidShareAlt,
  BiSolidBookmark,
} from "react-icons/bi";
import { tierCategoryType } from "../../common.types";
import { useEffect, useState } from "react";
import TierDetails from "../../components/Project_detail/Tier_details";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UseMainContext } from "../../context";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaBellSlash } from "react-icons/fa";

const Project_Page = () => {
  const { UserState, GoToUserChat } =
    UseMainContext();

  //may be changed with category id , or samething else
  const { project_id } = useParams();
  // fetch projecct data (info) by it id here;
  //fetch publisher from publisher(company) id
  const project = dummy_project;
  // ?? publisher (may be fetched to from db, or linked to the project (company _id))
  const publisher = dummy_project_publisher;

  //tier ....??
  const [selectedTier, setSetselectedTier] =
    useState<tierCategoryType>("basic");
  const navigate = useNavigate();
  const [
    SingleProjectData,
    setSingleProjectData,
  ] = useState<any>();
  const [companyDetales, setCompanyDetales] =
    useState<any>();
  const [application, setApplication] =
    useState<any>();

  //??  company is followed , temporary (saved onn db)
  const [isFollowed, setIsFollowed] =
    useState(false);
  //?? follow company (can be implemented in backend ) ??
  const follow = () => {
    //?? if followed , unfollow, else follow -->
    setIsFollowed((followed) => !followed);
  };

  const GetProjectInfo = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_GLOBAL_URL
        }/companies/projects/single/${project_id}`
      );

      setSingleProjectData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetCompanyDetales = async () => {
    try {
      if (
        SingleProjectData &&
        SingleProjectData.user_id
      ) {
        const res = await axios.get(
          `${
            import.meta.env.VITE_GLOBAL_URL
          }/user/${SingleProjectData.user_id}`
        );

        setCompanyDetales(res.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GetCompanyApplications = async () => {
    try {
      if (
        SingleProjectData &&
        SingleProjectData._id
      ) {
        const res = await axios.get(
          `${
            import.meta.env.VITE_GLOBAL_URL
          }/application/${SingleProjectData._id}`
        );

        const data = res.data;
        console.log(data);
        console.log(SingleProjectData);
        setApplication(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProjectInfo();
  }, [project_id]);
  useEffect(() => {
    GetCompanyDetales();
    GetCompanyApplications();
  }, [SingleProjectData]);

  const FindIfUserMadeAlreadyApplication =
    (): boolean => {
      let isAplication = true;
      if (
        application &&
        application.length > 0 &&
        UserState.userData.user &&
        UserState.userData.user._id
      ) {
        isAplication = application.find(
          (val: any) =>
            val.dev_id ===
            UserState?.userData?.user?._id
        );
        return isAplication === undefined
          ? false
          : true;
      } else {
        return false;
      }
    };

  const isUserApplication =
    FindIfUserMadeAlreadyApplication();

  if (
    SingleProjectData &&
    SingleProjectData._id &&
    companyDetales &&
    companyDetales._id
  ) {
    const {
      ContentUpload,
      DeliveryTime,
      DesignCustomization,
      Responsive,
      Revisions,
      StartDate,
      category,
      country,
      description,
      difficulty,
      image,
      isFinnished,
      price,
      skills,
      title,
      urgent,
      _id,
      user_id,
    } = SingleProjectData;

    // console.log(companyDetales);
    const { avatar, userName } = companyDetales;

    return (
      <div className="my-10 flex flex-col lg:flex-row gap-x-10 xl:gap-x-20">
        <article className="flex flex-col gap-x-6 gap-y-4">
          <h1 className="text-[3rem] leading-tight font-semibold text-primary dark:text-primary">
            {title}
          </h1>

          <div className="flex w-full flex-col sm:flex-row  gap-x-6 gap-y-2 sm:items-center">
            {/* publisher profile image */}
            <div
              onClick={() =>
                navigate(
                  `/company/page/${user_id}`
                )
              }
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                onClick={() =>
                  navigate(
                    `/company/page/${user_id}`
                  )
                }
                className="w-10 sm:w-16 h-10 sm:h-16 rounded-full cursor-pointer"
                src={avatar}
                alt="publisher-profile"
              />
              <h2 className="text-[1.3rem] font-semibold text-primary dark:text-primary">
                {userName}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[0.8rem] text-light-muted dark:text-dark-muted">
              <div className="flex gap-6 w-full sm:w-fit justify-between sm:justify-center ">
                <p>12 views</p>
                <p>
                  {application &&
                  application.length >= 0
                    ? application.length
                    : 0}{" "}
                  applications
                </p>
              </div>
              {/* save & share actions */}
              <div className="flex gap-4  w-full sm:w-fit items-end sm:items-center justify-end sm:justify-center">
                <p className="flex items-center gap-1">
                  <span className="text-xl">
                    <BiSolidBookmark />
                  </span>{" "}
                  <span className="hidden sm:block">
                    Save
                  </span>
                </p>
                <p className="flex items-center gap-1">
                  <span className="text-xl">
                    <BiSolidShareAlt />
                  </span>{" "}
                  <span className="hidden sm:block">
                    Share
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* project image */}
          {/* <iframe src="https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/connect-dev%2F47e5183c38502bd3bb48d0c551762176.jpg?alt=media&token=79520056-f2e9-4bba-99f6-fddc72b6849f"></iframe> */}
          <div className="w-full sm:max-w-2xl rounded-lg">
            <img
              className="rounded-lg shadow-md dark:shadow-green-950"
              src={image}
              alt="project-img"
            />
          </div>
          {/* project decsription */}
          <div className="w-full md:max-w-md lg:max-w-lg mt-5">
            <h1 className="text-[1.3rem] font-semibold text-primary dark:text-primary">
              Description
            </h1>
            <p className="text-[0.8rem] text-light-muted dark:text-dark-muted pl-4">
              {description}
            </p>
          </div>
          {/* more project infos */}
          <div>
            <h1 className="text-[1.3rem] font-semibold text-primary dark:text-primary">
              More info{" "}
            </h1>

            <div className="flex flex-wrap sm:pl-8 gap-5 my-6 text-sm">
              <p className="flex gap-2 text-center items-center  py-2 px-4 rounded-full border border-green-600 shadow-2xl shadow-gray-300 dark:shadow-green-900 dark:text-white">
                Budget:{" "}
                <span className="font-bold">
                  ${price}
                </span>
              </p>
              <p className="flex gap-2 text-center items-center  py-2 px-4 rounded-full border border-green-700 bg-primary text-white shadow-2xl shadow-green-900">
                Timeline:{" "}
                <span className="font-bold">
                  {urgent
                    ? "Urgent"
                    : "no-urgent"}
                </span>
              </p>
              <p className="flex gap-2 bg-green-800 text-center items-center py-2 px-4 rounded-full border border-green-600 shadow-2xl shadow-green-900 text-white capitalize">
                difficulty:{" "}
                <span className="font-bold">
                  {difficulty}
                </span>
              </p>
            </div>
          </div>
        </article>

        <article className="lg:flex-1 flex flex-col gap-4">
          <div className=" border border-green-500 bg-green-100/20 rounded-2xl dark:bg-slate-900 dark:border-slate-600 text-green-800 dark:text-green-300 p-4 md:p-10">
            <section className="flex justify-between items-center flex-wrap gap-y-2 border-b border-b-green-600 dark:border-slate-600 pb-8">
              <h1 className="text-lg">
                Select Tier
              </h1>
              <div className="flex gap-4">
                {[
                  "basic",
                  "standard",
                  "premium",
                ].map((tier) => (
                  <button
                    className={`text-white ${
                      selectedTier === tier
                        ? "bg-green-800"
                        : "bg-primary"
                    } px-2 sm:px-4 py-1 sm:py-2 text-sm rounded-md shadow-lg capitalize`}
                    key={tier}
                    onClick={() =>
                      setSetselectedTier(
                        tier as tierCategoryType
                      )
                    }
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </section>
            <TierDetails
              tier={SingleProjectData}
            />
            <section className="flex flex-col gap-2 py-6 items-center">
              {/* apply */}
              <button
                disabled={isUserApplication}
                onClick={() =>
                  navigate(
                    `/company/project/application/${_id}/${user_id}`
                  )
                }
                className="bg-primary disabled:bg-red-600  text-white p-2 text-center min-w-fit w-3/4 rounded-full shadow-md hover:bg-primary"
              >
                {!isUserApplication
                  ? "Apply"
                  : "You have already applied for this job"}
              </button>

              {/* message the company or publisher */}
              <button
                className="border-2 border-light-green  text-primary p-2 text-center min-w-fit w-3/4 rounded-full shadow-md hover:bg-slate-200 dark:hover:bg-slate-800"
                onClick={() =>
                  GoToUserChat(user_id)
                }
              >
                Message {userName.split(" ")[0]}
              </button>
            </section>
          </div>
          {/* publisher details card */}
          <div className="p-2 md:p-4 flex gap-6 justify-between 2xl:max-w-fit shadow-md bg-white border dark:bg-slate-900 dark:text-green-400 dark:border-slate-500 rounded-lg mt-10">
            {/* publisher image */}
            <section className=" w-36 h-auto">
              <img
                className="w-full h-full object-contain rounded-lg"
                src={avatar}
                alt="publisher profile"
              />
            </section>
            {/* publisher details */}
            <section className="flex flex-col gap-2">
              <article className="flex-1 flex justify-between items-center font-semibold">
                <h1 className="capitalize text-[1.3rem]">
                  {userName}
                </h1>
                <div className="uppercase text-sm">
                  {publisher.country
                    .split("")
                    .splice(0, 3)
                    .join("")}
                </div>
              </article>

              <p className=" text-light-muted dark:text-dark-muted text-sm">
                {publisher.description
                  .split("")
                  .slice(0, 200)}{" "}
                ...
              </p>

              <article
                className={`flex items-center gap-1 p-1 pr-2 py-2 shadow  rounded-lg hover:shadow-md hover:bg-primary-hover dark:hover:bg-slate-800  max-w-fit cursor-pointer ${
                  isFollowed ? "" : ""
                }`}
                onClick={follow}
              >
                <p
                  className={`text-lg  ${
                    !isFollowed
                      ? "text-green-700 text-lg"
                      : "text-red-500 text-lg"
                  } `}
                >
                  {!isFollowed && (
                    <AiFillPlusCircle />
                  )}
                  {isFollowed && <FaBellSlash />}
                </p>

                <p
                  className={`text-sm ${
                    !isFollowed
                      ? "text-green-700  dark:text-green-700"
                      : "text-red-500"
                  } `}
                >
                  {!isFollowed
                    ? "Follow"
                    : "Unsubscribe"}
                </p>
              </article>
            </section>
          </div>
          {/* testing application button */}
        </article>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Project_Page;
