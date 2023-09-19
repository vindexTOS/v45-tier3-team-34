import React, {
  FC,
  HTMLInputTypeAttribute,
  useState,
  useRef,
} from "react";
import { RegisterFormType } from "../../common.types";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import useOutClick from "../../hooks/useOutClick";
type FieldType = "role" | string;

type Proptypes = {
  label: string;
  type: HTMLInputTypeAttribute;
  field: string;
  setData: React.Dispatch<
    React.SetStateAction<RegisterFormType>
  >;
};
const dropDownSelect: FC<Proptypes> = ({
  label,
  type,
  field,
  setData,
}) => {
  function handleChange({
    field,
    value,
  }: {
    field: FieldType;
    value: string;
  }) {
    switch (field) {
      case "role":
        setData((usr) => ({
          ...usr,
          role: value,
        }));
        break;

      default:
        break;
    }
  }

  const [dropDown, setDropDown] =
    useState<boolean>(false);
  const [localState, setLocalState] =
    useState<string>("Developer");

  const hanndleCloseDown = () => {
    setDropDown(false);
  };
  const dropDownRef =
    React.useRef<HTMLDivElement | null>(null);

  useOutClick(dropDownRef, hanndleCloseDown);

  return (
    <div
      ref={dropDownRef}
      className="w-full relative"
    >
      <h1 className="mb-1 text-sm text-light-text dark:text-dark-text">
        {label}
      </h1>
      <div
        onClick={() => setDropDown(!dropDown)}
        className="flex justify-between items-center border border-gray-400 outline-green-700 outline-1 w-full py-2 px-4 rounded-full font-light text-lg dark:text-gray-400 "
      >
        <p className="text-sm">{localState}</p>
        <div>
          {dropDown ? (
            <TiArrowSortedDown />
          ) : (
            <TiArrowSortedUp />
          )}
        </div>
      </div>
      {dropDown && (
        <div className="w-full h-[80px] flex flex-col p-2 text-gray-400  bg-gray-100 shadow-md rounded-[10px] absolute text-sm">
          {new Array(
            "Developer",
            "Company/Startup"
          ).map((val: string) => (
            <p
              className="hover:bg-green-800 p-1 cursor-pointer hover:text-white rounded-full"
              onClick={() => {
                handleChange({
                  field,
                  value: val,
                }),
                  setLocalState(val),
                  setDropDown(false);
              }}
              key={val}
            >
              {val}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default dropDownSelect;
