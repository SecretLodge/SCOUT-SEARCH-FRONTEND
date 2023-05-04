import { chatRequest } from "@/helpers/chatRequest";
import { useEffect, useRef, useState } from "react";
import ButtonSend from "./ButtonSend";
import InputRequest from "./InputRequest";
import LinkDeveloper from "./LinkDeveloper";
import { chatResponseModel } from "@/helpers/chatRequest";
import scrollToElement from "@/helpers/scrollToElement";

const inputResponseSE = "se:rounded-[12px]";
const inputResponseIE = "ie:rounded-[12px]";
const inputResponseXS = "xs:rounded-[12px]";
const inputResponseSS = "ss:rounded-[12px]";
const inputResponseSM = "sm:rounded-[9px]";
const inputResponseMD = "md:rounded-[9px]";

const inputResponse = `${inputResponseSE} ${inputResponseIE} ${inputResponseXS} ${inputResponseSS} ${inputResponseSM} ${inputResponseMD} mt-[10px] max-w-[500px] bg-light-300`;

const InputStyles =
  "fixed bottom-[35px] right-[50%] flex w-full max-w-[1000px] translate-x-[50%] px-[10px]";
const LinkStyles =
  "fixed bottom-[10px] right-[50%] flex translate-x-[50%] px-[10px] min-w-[250px]";
const MessagesStyles = "mx-auto flex max-w-[1000px] flex-col px-[10px]";
const TextStyles = "whitespace-pre-wrap py-[15px] px-[20px] text-light-100";

export default function Chat() {
  const [allMessages, setMessages] = useState<Array<chatResponseModel>>([]);
  const [userRequest, setUserRequest] = useState<chatResponseModel>(null!);
  const [buttonPressed, setPressed] = useState(false);
  const scrollElement = useRef<HTMLDivElement>(null!);

  const sendRequest = async () => {
    if (buttonPressed) return;
    setPressed(true);

    setMessages([...allMessages, userRequest]);
    chatRequest([...allMessages, userRequest])
      .then((response) => {
        setMessages([...allMessages, userRequest, response]);
      })
      .catch(() => {
        setMessages([
          ...allMessages,
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
          {allMessages.map((item, index) => (
            <section
              key={index}
              className={`flex ${item.role === "user" && "flex-row-reverse"}`}
            >
              <div className="mx-[9px] mt-[25px]">
                {item.role === "user" ? "😄" : "🤖"}
              </div>
              <div className={inputResponse}>
                <p className={TextStyles}>{item.content}</p>
              </div>
            </section>
          ))}
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
