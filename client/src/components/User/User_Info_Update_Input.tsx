import React, { useState } from "react";
import { GiSaveArrow } from "react-icons/gi";
import {
  MdOutlineCancel,
  MdModeEdit,
} from "react-icons/md";
import { UseMainContext } from "../../context";

interface EditableFieldProps {
  initialValue?: string;
  type: string;
  obj: any;
  newValue: any;
  style?: string;
  textArea?: boolean;
  isUser?: boolean;
  link?: string;
}

const EditableField: React.FC<
  EditableFieldProps
> = ({
  initialValue,
  type,
  obj,
  newValue,
  style,
  textArea,
  isUser,
  link,
}) => {
  const {
    UserStateUpdateDispatch,
    UserStateUpdate,
    UpdateUserInfo,
  } = UseMainContext();

  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    UpdateUserInfo(obj, link || "");
    setEditing(false);
  };

  return (
    <div className="border border-gray-600/20 dark:border-gray-600/50 w-full  p-1 sm:p-2 rounded-md shadow-sm  bg-white/20 dark:bg-slate-800 text-gray-800 dark:text-gray-300 lg:min-w-[200px]">
      <div className="flex gap-2 justify-between ">
        {!editing ? (
          <h1 className="text-lg text-primary dark:text-primary  font-semibold capitalize ">
            {type}
          </h1>
        ) : (
          <div className="flex items-center justify-center gap-1">
            {textArea ? (
              <textarea
                className={`${style}`}
                value={newValue}
                onChange={(e) =>
                  UserStateUpdateDispatch({
                    type: type,
                    payload: e.target.value,
                  })
                }
              ></textarea>
            ) : (
              <input
                className={`${style}`}
                value={newValue}
                onChange={(e) =>
                  UserStateUpdateDispatch({
                    type: type,
                    payload: e.target.value,
                  })
                }
              />
            )}
            <GiSaveArrow
              className="text-primary mt-1 cursor-pointer"
              onClick={handleSave}
            />
            <MdOutlineCancel
              className="text-destructive mt-1 cursor-pointer"
              onClick={() => setEditing(false)}
            />
          </div>
        )}
        <div
          className={`text-primary w-fit text-sm bg-white p-0.5 h-fit rounded-[50%] outline outline-2 outline-gray-300 relative -top-4 left-3 ${
            editing && "hidden"
          } ${isUser && "hidden"}`}
        >
          <MdModeEdit
            onClick={() => setEditing(!editing)}
          />
        </div>
      </div>
      {!editing && (
        <p className="pl-2 md:pl-4 text-[1rem] text-muted">
          {initialValue}
        </p>
      )}
    </div>
  );
};

export default EditableField;
