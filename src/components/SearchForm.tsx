import { useRef, useState } from "react";
import ButtonSend from "@/components/ButtonSend";
import InputRequest from "@/components/InputRequest";
import InputChatResponse from "@/components/InputChatResponse";
import LinkDeveloper from "@/components/LinkDeveloper";
import chatRequest from "@/helpers/chatRequest";
import searchRequest from "@/helpers/searchRequest";
import InputSearchResponse from "@/components/InputSearchResponse";
import scrollToElement from "@/helpers/scrollToElement";

const maxWidthSE = "se:max-w-[285px]";
const maxWidthIE = "ie:max-w-[332px]";
const maxWidthXS = "xs:max-w-[381px]";
const maxWidthSS = "ss:max-w-[581px]";
const maxWidthSM = "sm:max-w-[625px]";
const maxWidthMD = "md:max-w-[870px]";

export default function SearchForm() {
  const [searchResponse, setSearchResponse] = useState();
  const [chatResponse, setChatResponse] = useState("");
  const [userRequest, setUserRequest] = useState("");
  const [buttonPressed, setPressed] = useState(false);
  const linkDeveloperRef = useRef<HTMLDivElement>(null!);

  const sendRequest = async () => {
    if (buttonPressed) return;
    setPressed(true);

    try {
      searchRequest(userRequest).then((results) => {
        setSearchResponse(results);
        scrollToElement(linkDeveloperRef);
      });
      chatRequest(userRequest).then(({ content }) => {
        setChatResponse(content);
        setPressed(false);
      });
    } catch {
      setChatResponse(
        "Произошла ошибочка, попробуйте ещё раз. Если не получится, то напишите разработчику. \nCпасибо за понимание 🍉"
      );
    }
  };

  return (
    <div
      className={`mx-auto ${maxWidthSE} ${maxWidthIE} ${maxWidthXS} ${maxWidthSS} ${maxWidthSM} ${maxWidthMD}`}
    >
      <LinkDeveloper linkDeveloperRef={linkDeveloperRef} />
      <div className="mt-[10px] flex max-h-[240px] items-end">
        <InputRequest sendRequest={sendRequest} setRequest={setUserRequest} />
        <ButtonSend sendRequest={sendRequest} buttonPressed={buttonPressed} />
      </div>
      {chatResponse ? <InputChatResponse response={chatResponse} /> : ""}
      {searchResponse ? <InputSearchResponse response={searchResponse} /> : ""}
    </div>
  );
}
