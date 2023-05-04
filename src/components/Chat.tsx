import { chatRequest } from "@/helpers/chatRequest";
import { useEffect, useRef, useState } from "react";
import ButtonSend from "./ButtonSend";
import InputRequest from "./InputRequest";
import LinkDeveloper from "./LinkDeveloper";
import { chatResponseModel } from "@/helpers/chatRequest";
import scrollToElement from "@/helpers/scrollToElement";
import store from "store";
import Messages from "./Messages";

const InputStyles =
  "fixed bottom-[35px] right-[50%] flex w-full max-w-[1000px] translate-x-[50%] px-[10px]";
const LinkStyles =
  "fixed bottom-[10px] right-[50%] flex translate-x-[50%] px-[10px] min-w-[250px]";
const MessagesStyles = "mx-auto flex max-w-[1000px] flex-col px-[10px]";

export default function Chat() {
  const [allMessages, setMessages] = useState<Array<chatResponseModel>>(
    store.get("messages") ?? store.set("messages", [])
  );
  const [userRequest, setUserRequest] = useState<chatResponseModel>(null!);
  const [buttonPressed, setPressed] = useState(false);
  const scrollElement = useRef<HTMLDivElement>(null!);

  const addMessages = (messages: chatResponseModel[]) => {
    setMessages([...allMessages, ...messages]);
  };

  useEffect(() => {
    store.set("messages", allMessages);
  }, [allMessages]);

  const sendRequest = async () => {
    if (buttonPressed) return;
    setPressed(true);

    addMessages([userRequest]);
    chatRequest([...allMessages, userRequest])
      .then((response) => {
        addMessages([userRequest, response]);
      })
      .catch(() => {
        addMessages([
          userRequest,
          {
            role: "assistent",
            content:
              "Извините, что то пошло не так. Попробуйте задать этот вопрос ещё раз 🐨",
          },
        ]);
      })
      .finally(() => {
        setPressed(false);
        scrollToElement(scrollElement);
      });
  };

  return (
    <div>
      <div className={MessagesStyles}>
        <div className="mt-[20px]">
          <Messages allMessages={allMessages} />
        </div>
      </div>
      <div className="flex">
        <div className={InputStyles}>
          <InputRequest setRequest={setUserRequest} sendRequest={sendRequest} />
          <ButtonSend sendRequest={sendRequest} buttonPressed={buttonPressed} />
        </div>
        <div className={LinkStyles}>
          <LinkDeveloper />
        </div>
      </div>
      <div className="h-[250px]" ref={scrollElement}></div>
    </div>
  );
}
