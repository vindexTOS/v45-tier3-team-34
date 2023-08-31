import React, {
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UseMainContext } from "../../../context";
const Developer_list = () => {
  const { GetSingleDev } = UseMainContext();
  const [devData, setDevData] = useState<any>();
  const navigate = useNavigate();
  const GetAllDevs = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/all_devs`
      );

      setDevData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllDevs();
  }, []);
  if (devData && devData.devs) {
    return (
      <div className="items-center justify-center flex flex-wrap gap-3">
        {devData.devs.map((val: any) => {
          const {
            avatar,
            date,
            email,
            role,
            userName,
            _id,
          } = val.user;
          //   const { hrPay, firstName, lastName, userTimeZone, title } =
          //     val.user_info || {}

          return (
            <div
              onClick={() => GetSingleDev(_id)}
              key={_id}
              className="bg-white rounded-lg w-[400px] h-[400px] shadow-md p-4 max-w-xs cursor-pointer hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center">
                <img
                  src={avatar}
                  alt={userName}
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold">
                  {userName}
                </h2>
                <p className="text-gray-500">
                  {role}
                </p>
                {/* Add more information here */}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div className="">Loading...</div>;
  }
};

export default Developer_list;
