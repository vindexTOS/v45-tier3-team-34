import React, { useRef, useState } from "react";
import Single_Application from "./Single_Application";
import useOutClick from "../../../../hooks/useOutClick";
import { useNavigate } from "react-router-dom";
export default function Application_drop_down({
  data,
}: {
  data: any;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const navigateOut = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  useOutClick(ref, navigateOut);
  const {
    userName,
    avatar,
    description,
    application_id,
    dev_id,
  } = data;
  return (
    <div
      ref={ref}
      className=" py-4 flex flex-col gap-2 realtive  "
    >
      <div
        onClick={() =>
          navigate(`/Developer/${dev_id}`)
        }
        className="flex items-center p-2 md:px-6 gap-2 cursor-pointer"
      >
        <img
          className="w-[50px] h-[50px] rounded-full object-contain"
          src={avatar}
        />
        <h1 className="text-slate-800 dark:text-slate-200 text-xl">
          {userName}
        </h1>
      </div>
      <p className="px-10 text-sm text-blue-500">
        {description && description.slice(0, 50)}
        ...
      </p>
      <div className="flex items-end justify-end px-10">
        <button
          onClick={() => setOpen(!open)}
          className="bg-primary dark:bg-primary hover:dark:bg-slate-900 dark:hover:text-green-500 py-1 pb-2 text-white hover:text-slate-900 dark:text-slate-700  hover:bg-primary-hover w-fit px-4 rounded-[40px] shadow-md "
        >
          See application
        </button>
      </div>
      {open && <Single_Application data={data} />}
    </div>
  );
}
