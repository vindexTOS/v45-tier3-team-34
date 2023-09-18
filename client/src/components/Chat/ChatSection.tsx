import React, { useEffect, useRef } from "react";
import { UseMainContext } from "../../context";
import axios from "axios";
import classNames from "classnames";
export default function ChatSection({
  messages,
}: {
  messages: any;
}) {
  const { UserState, isUserLoggedIn } =
    UseMainContext();
  const chatContainerRef: React.RefObject<HTMLSpanElement> =
    useRef(null); // Define the type of the ref
  const element =
    chatContainerRef?.current as HTMLDivElement;
  useEffect(() => {
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
        }); // Scroll to the end of the chat container
      }, 500);
    }
  }, [messages]);
  const SeeNotifications = async () => {
    if (isUserLoggedIn) {
      try {
        const res = await axios.post(
          `${
            import.meta.env.VITE_GLOBAL_URL
          }/chat/see-notifications`,
          {
            receiverId:
              UserState.userData.user._id,
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    SeeNotifications();
  }, []);
  return (
    <div
      // style={{ overflowY: 'scroll', maxHeight: '390px' }}
      className=" h-[500px]  py-2  px-2 overflow-y-auto w-full flex flex-col items-center gap-2"
    >
      {messages &&
        messages.length > 0 &&
        messages.map((val: any) => {
          const { sender, content } = val;

          // Determine if the message is sent by the user or received from others
          const isUserMessage =
            sender ===
            UserState.userData.user._id;

          // Apply different styles based on the sender
          const messageClasses = `px-10 max-h-[500px] max-w-[250px] w-fit rounded-[50px] break-normal py-2  ${
            isUserMessage
              ? "bg-primary dark:bg-primary text-white self-start rounded-bl-none"
              : "bg-white dark:bg-slate-900 text-primary text-right self-end rounded-br-none"
          }`;

          return (
            <div
              onClick={() =>
                console.log(messages)
              }
              className={messageClasses}
              key={val._id}
            >
              <h1>{content}</h1>
            </div>
          );
        })}
      <span ref={chatContainerRef}></span>
    </div>
  );
}
