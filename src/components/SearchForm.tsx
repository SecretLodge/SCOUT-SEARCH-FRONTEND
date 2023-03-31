import { useState } from "react";
import ButtonSend from "./ButtonSend";
import InputRequest from "./InputRequest";
import InputChatResponse from "./InputChatResponse";
import LinkDeveloper from "./LinkDeveloper";
import chatRequest from "@/helpers/chatRequest";
import searchRequest from "@/helpers/searchRequest";
import InputSearchResponse from "./InputSearchResponse";

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

  const sendRequest = async () => {
    if (buttonPressed) return;
    setPressed(true);
    const [{ content }, items] = await Promise.all([
      chatRequest(userRequest),
      searchRequest(userRequest),
    ]);
    setSearchResponse(items);
    setChatResponse(content);
    setPressed(false);
  };

  return (
    <div
      className={`mx-auto ${maxWidthSE} ${maxWidthIE} ${maxWidthXS} ${maxWidthSS} ${maxWidthSM} ${maxWidthMD}`}
    >
      <LinkDeveloper />
      <div className="mt-[10px] flex">
        <InputRequest sendRequest={sendRequest} setRequest={setUserRequest} />
        <ButtonSend sendRequest={sendRequest} buttonPressed={buttonPressed} />
      </div>
      {chatResponse ? <InputChatResponse response={chatResponse} /> : ""}
      {searchResponse ? <InputSearchResponse response={searchResponse} /> : ""}
    </div>
  );
}
