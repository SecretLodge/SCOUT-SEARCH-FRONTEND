import { useState, useRef, useEffect } from "react";
import ButtonSend from "./ButtonSend";
import InputRequest from "./InputRequest";
import InputResponse from "./InputResponse";
import LinkDeveloper from "./LinkDeveloper";
import axios from "axios";

const maxWidthSE = "se:max-w-[285px]";
const maxWidthIE = "ie:max-w-[332px]";
const maxWidthXS = "xs:max-w-[381px]";
const maxWidthSS = "ss:max-w-[581px]";
const maxWidthSM = "sm:max-w-[625px]";
const maxWidthMD = "md:max-w-[870px]";

export default function SearchForm() {
  const [response, setResponse] = useState("");
  const [request, setRequest] = useState("");
  const [buttonPressed, setPressed] = useState(false);

  const sendRequest = () => {
    if (buttonPressed) return;
    setPressed(true);

    axios("https://scoutai.ru/chat/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        messages: [{ role: "user", content: request }],
      },
    }).then(({ data }) => {
      setResponse(data.content);
      setPressed(false);
    });
  };

  return (
    <div
      className={`mx-auto ${maxWidthSE} ${maxWidthIE} ${maxWidthXS} ${maxWidthSS} ${maxWidthSM} ${maxWidthMD}`}
    >
      <LinkDeveloper />
      <div className="mt-[10px] flex">
        <InputRequest sendRequest={sendRequest} setRequest={setRequest} />
        <ButtonSend sendRequest={sendRequest} buttonPressed={buttonPressed} />
      </div>
      {response ? <InputResponse response={response} /> : null}
    </div>
  );
}
