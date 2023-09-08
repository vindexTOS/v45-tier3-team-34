import React, { useEffect } from "react";
import { UseMainContext } from "../../context";
import Portfolio_Change_TextArea from "./Portfolio_Change_TextArea";
import { useNavigate } from "react-router-dom";
import { TbPhotoEdit } from "react-icons/tb";
import Portfolio_Buttons from "./Portfolio_Buttons";
import { skills } from "../../assets/front-end-data/skills_array";
export type stateArrayType = {
  title: string;
  value: string;
  type: string;
};
const Portfolio_Preview = () => {
  const {
    PortfolioDispatch,
    PortfolioState,
    ImgState,
  } = UseMainContext();
  const navigate = useNavigate();
  const {
    description,
    github,
    liveLink,
    role,

    title,
    video,
  } = PortfolioState;

  const [search, setSearch] =
    React.useState<string>("");
  const [openSearch, setOpenSearch] =
    React.useState<boolean>(false);
  const addSkill = () => {
    if (PortfolioState.skill) {
      PortfolioDispatch({
        type: "technologies",
        payload: PortfolioState.skill,
      });
      PortfolioDispatch({
        type: "skill",
        payload: "",
      });
    }
  };
  const RemoveSkill = (i: number) => {
    let newArr =
      PortfolioState.technologies.filter(
        (_val, global) => global !== i
      );

    PortfolioDispatch({
      type: "technologies-removed",
      payload: newArr,
    });
  };
  useEffect(() => {
    addSkill();
  }, [PortfolioState.skill]);
  const style = {
    section: `w-[100%] flex flex-col max-h-[3000px] gap-4`,
    header: `text-[2rem]`,
    stateDiv: `flex flex-col gap-3`,
    imgDiv: `relative w-[100%] flex items-center flex-col justify-center`,
    img: `h-[500px] w-[100%] rounded-[12px] cursor-pointer`,
    icon: `absolute text-[6rem] text-white hover:text-gray-200 cursor-pointer`,
    skillsDiv: `flex gap-2   w-[100%] flex-wrap  max_smm:w-[90%]   bg-green-300/50 shadow-md p-2 rounded-[9px]     z-20`,
    singleSkill: ` cursor-pointer hover:bg-red-500 hover:text-white shadow-md text-gray-400 p-1 rounded-[9px] bg-gray-100`,
  };

  const stateArray: stateArrayType[] = [
    {
      title: "Title",
      value: title,
      type: "title",
    },
    {
      title: "Description",
      value: description,
      type: "description",
    },
    { title: "Role", value: role, type: "role" },
    {
      title: "Github",
      value: github || "",
      type: "github",
    },
    {
      title: "Live Link",
      value: liveLink || "",
      type: "liveLink",
    },
    {
      title: "Video",
      value: video || "",
      type: "video",
    },
  ];
  return (
    <section className={style.section}>
      <h1 className={style.header}>Preview</h1>
      <div className={style.stateDiv}>
        {stateArray.map((val: stateArrayType) => (
          <Portfolio_Change_TextArea
            key={val.title}
            originalState={val}
          />
        ))}
      </div>
      <div className={style.imgDiv}>
        <img
          className={style.img}
          src={ImgState.imgUrl}
          onClick={() =>
            navigate("/dev_project_add/details")
          }
        />
        <TbPhotoEdit
          onClick={() =>
            navigate("/dev_project_add/details")
          }
          className={style.icon}
        />
      </div>
      {PortfolioState.technologies.length >=
        1 && (
        <div className={style.skillsDiv}>
          {PortfolioState.technologies.map(
            (val, i) => {
              return (
                <div
                  title="remove"
                  onClick={() => RemoveSkill(i)}
                  key={i}
                  className={style.singleSkill}
                >
                  {val}
                </div>
              );
            }
          )}
        </div>
      )}
      <div className="  w-[100%]  relative px-3 max_850:w-[100%] ">
        <label
          className="block uppercase tracking-wide text-gray-500 text-[10px]   mb-2"
          htmlFor="skill"
        >
          Technologies Used
        </label>
        <input
          value={search}
          onClick={() =>
            setOpenSearch(!openSearch)
          }
          onChange={(e) => {
            setSearch(e.target.value);
            // PortfolioDispatch({ type: 'skill', payload: e.target.value })
          }}
          id="skill"
          type={"text"}
          placeholder={
            "Add technologies used one by one"
          }
          className="appearance-none block w-[100%] rounded-[9px] bg-white text-gray-700 border border-gray-200   py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        {openSearch && (
          <div className="w-[95%] z-50 overflow-y-scroll h-[120px] flex flex-col p-2 text-gray-400  bg-white shadow-md rounded-[2px] absolute">
            {skills
              .filter((filtval: string) => {
                if (search === "") {
                  return filtval;
                } else if (
                  filtval
                    .toLowerCase()
                    .includes(
                      search.toLowerCase()
                    )
                ) {
                  return filtval;
                }
              })
              .map((val: string) => (
                <p
                  className="hover:bg-gray-200 p-1 cursor-pointer hover:text-white"
                  onClick={() => {
                    setOpenSearch(false),
                      PortfolioDispatch({
                        type: "skill",
                        payload: val,
                      });
                  }}
                  key={val}
                >
                  {val}
                </p>
              ))}
          </div>
        )}
      </div>
      <Portfolio_Buttons
        nextbtn="Submit The Project"
        link=" "
        backbtn="back"
        cancelToken="back-to-detail"
      />
    </section>
  );
};

export default Portfolio_Preview;
