import changeHeight from "@/helpers/changeHeight";
import { ChangeEvent } from "react";

const inputRequestSE = "se:rounded-[12px]";
const inputRequestIE = "ie:rounded-[12px]";
const inputRequestXS = "xs:rounded-[12px]";
const inputRequestSS = "ss:rounded-[12px]";
const inputRequestSM = "sm:rounded-[9px]";
const inputRequestMD = "md:rounded-[9px]";
const inputRequestOther =
  "grow flex-col flex justify-center bg-light-300 py-[15px] px-[20px] shadow-gray-20";
const inputRequest = `${inputRequestSE} ${inputRequestIE} ${inputRequestXS} ${inputRequestSS} ${inputRequestSM} ${inputRequestMD} ${inputRequestOther}`;
const textarea =
  "text-light-100 width-[100%] leading-[30px] resize-none border-none outline-none bg-light-300";

export default function InputRequest(props: {
  setRequest: (value: string) => void;
  sendRequest: () => void;
}) {
  const getText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.setRequest((event.target as unknown as HTMLInputElement).value);
  };

  const sendOnEnter = (event: { key: string; preventDefault: () => void }) => {
    if (event.key !== "Enter") return;
    props.sendRequest();
    event.preventDefault();
  };

  return (
    <div className={inputRequest}>
      <textarea
        className={textarea}
        id="inputRequest"
        placeholder="Введите ваш запрос"
        rows={1}
        onChange={(event) => {
          getText(event);
          changeHeight(event);
        }}
        onKeyDown={(event) => {
          sendOnEnter(event);
        }}
      />
    </div>
  );
}
