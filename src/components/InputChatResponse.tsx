const inputResponseSE = "se:rounded-[12px]";
const inputResponseIE = "ie:rounded-[12px]";
const inputResponseXS = "xs:rounded-[12px]";
const inputResponseSS = "ss:rounded-[12px]";
const inputResponseSM = "sm:rounded-[9px]";
const inputResponseMD = "md:rounded-[9px]";

export default function InputChatResponse(props: { response: string }) {
  return (
    <div>
      <div
        className={`${inputResponseSE} ${inputResponseIE} ${inputResponseXS} ${inputResponseSS} ${inputResponseSM} ${inputResponseMD} mt-[15px] whitespace-pre-wrap bg-light-300 py-[18px] px-[20px] text-light-100 shadow-gray-20`}
      >
        <p>{props.response}</p>
      </div>
    </div>
  );
}
