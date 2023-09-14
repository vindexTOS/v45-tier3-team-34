import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { BsBell } from "react-icons/bs";
import { RiChatOffLine } from "react-icons/ri";
import User_drop_down from "../User/User_drop_down";
import { UseMainContext } from "../../context";
import useOutClick from "../../hooks/useOutClick";
import axios from "axios";

const UserProflieNav = () => {
  const dropDownRef =
    useRef<HTMLDivElement | null>(null);

  const {
    UserState,
    chatRoom,
    GetMessages,
    GoToUserChat,
    isUserLoggedIn,
  } = UseMainContext();
  useEffect(() => {
    GetMessages(UserState.userData.user._id);
  }, [UserState.userData.user._id]);
  const [dropDown, setDropDown] = useState(false);
  const [notficationDrop, setNotificationDrop] =
    useState(false);
  const closeDropDown = () => {
    setDropDown(false);
  };

  const [
    NotificationMessages,
    setNotificationMessages,
  ] = useState<any>([]);
  useOutClick(dropDownRef, closeDropDown);

  const UNreadNotifications = async () => {
    try {
      if (isUserLoggedIn) {
        const req = await axios.get(
          `${
            import.meta.env.VITE_GLOBAL_URL
          }/chat/get-notifications/${
            UserState.userData.user._id
          }`
        );
        setNotificationMessages(req.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if (chatRoom && chatRoom.messages && chatRoom.messages.length > 0) {
    //   const Alert = chatRoom.messages.filter(
    //     (val: any) =>
    //       String(val.sender) !== UserState.userData.user._id &&
    //       val.isRead === false,
    //   )
    //   Alert.reverse()
    //   setNotificationMessages(Alert)
    // }

    UNreadNotifications();
  }, [chatRoom]);

  return (
    <div
      ref={dropDownRef}
      className="relative flex items-center justify-around gap-5 cursor-pointer"
    >
      <div
        onClick={() =>
          setNotificationDrop(!notficationDrop)
        }
        className="relative"
      >
        <BsBell className="text-[1.5rem] text-muted dark:text-muted" />
        <span className="absolute top-3 bg-primary text-white flex items-center justify-center text-[12px] p-2  w-[12px] h-[12px]  rounded-[50%]">
          {NotificationMessages.length}
        </span>
      </div>
      <img
        onClick={() => setDropDown(!dropDown)}
        className="w-[50px] h-[50px] rounded-[50%] cursor-pointer"
        src={UserState.userData.user.avatar}
      />
      {dropDown && <User_drop_down />}
      {notficationDrop && (
        <div className="absolute flex flex-col py-4 px-5 rounded-[10px] bg-[#F7FAF7] dark:bg-slate-900 shadow-md  top-14 right-[2rem] z-10 border-2 border-t-primary">
          {NotificationMessages &&
          NotificationMessages.length > 0 ? (


            <div
              onClick={() =>
                console.log(NotificationMessages)
              }
              className="flex flex-col gap-2 "
            >
              {NotificationMessages.map(
                (val: any) => {
                  const { content } = val;
                  return (
                    <div
                      onClick={() =>
                        GoToUserChat(
                          String(val.sender)
                        )
                      }
                      className="bg-gray-200 py-2 px-4 rounded-lg text-muted hover:bg-[#F7FAF7]  dark:bg-slate-950 hover:dark:bg-slate-900"
                      key={val._id}
                    >
                      {content.slice(0, 40)}...

                    </div>
                  );
                }
              )}

            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center text-primary z-10">
              <RiChatOffLine />
              <p className="text-tersiary text-sm">
                No notifcations
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProflieNav;
