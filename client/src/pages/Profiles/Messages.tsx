import React, {
  useState,
  useEffect,
} from "react";
import { Outlet } from "react-router-dom";
import Chat from "../../components/Chat/Chat_Main";
import axios from "axios";
import { UseMainContext } from "../../context";
const defaultPhoto =
  "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg";

const Messages = () => {
  const {
    UserState,
    isUserLoggedIn,
    userId,
    setUserId,
  } = UseMainContext();
  const [chatData, setChatData] = useState<any>(
    []
  );
  const [selectedChat, setSelectedChat] =
    useState("");
  const getUserId = (id: string) => {
    setUserId(id);
    setSelectedChat(id);
  };
  const GetSingleUserChats = async () => {
    try {
      if (isUserLoggedIn) {
        const res = await axios.get(
          `${
            import.meta.env.VITE_GLOBAL_URL
          }/chat/get-user-chats/${
            UserState.userData.user._id
          }`
        );

        const data = res.data.chatRooms;

        setChatData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSingleUserChats();
  }, [UserState.userData]);

  if (isUserLoggedIn)
    return (
      <div className=" w-full h-full flex ">
        <div className="px-1 sm:px-4 gap-5 flex flex-col p-4 max-h-[800px] overflow-y-auto bg-white dark:bg-slate-800 rounded-l-2xl">
          <h1 className="text-[0.8rem] sm:text-[1rem] text-muted">
            Chats
          </h1>
          {chatData.length > 0
            ? chatData?.map((val: any) => {
                const { id, name, avatar } =
                  val.userInfo;
                const { lastMessage } = val;
                return (
                  <div
                    onClick={() => getUserId(id)}
                    className={`flex items-center gap-2 shadow-md p-2 rounded-[9px] relative cursor-pointer hover:bg-primary hover:dark:bg-slate-300/50 hover:dark:text-slate-800 w-fit sm:w-full
                    ${
                      selectedChat === id
                        ? "bg-primary-hover dark:text-slate-200 dark:bg-slate-900"
                        : "bg-gray-200/50 dark:bg-slate-800"
                    }`}
                    key={id}
                  >
                    <div
                      className={`flex${
                        !lastMessage.isRead &&
                        UserState.userData.user
                          ._id ===
                          lastMessage.receiverId
                          ? "w-[20px] h-[20px] bg-destructive rounded-[50%] absolute top-2"
                          : "hidden"
                      }`}
                    ></div>

                    <div className="flex gap-2 sm:gap-2 justify-center items-center w-fit">
                      <p>
                        <img
                          className="w-10 h-10 rounded-full shadow-md object-cover"
                          src={
                            avatar
                              ? avatar
                              : defaultPhoto
                          }
                        />
                      </p>
                      <p></p>
                      <h1 className="hidden sm:block text-center font-normal h-full">
                        {name}
                      </h1>
                    </div>
                  </div>
                );
              })
            : "NO chats"}
        </div>
        <Chat userId={userId} />
      </div>
    );
};

export default Messages;
