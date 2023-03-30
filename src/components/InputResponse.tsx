const inputResponseSE = "se:rounded-[12px]";
const inputResponseIE = "ie:rounded-[12px]";
const inputResponseXS = "xs:rounded-[12px]";
const inputResponseSS = "ss:rounded-[12px]";
const inputResponseSM = "sm:rounded-[9px]";
const inputResponseMD = "md:rounded-[9px]";

export default function InputResponse(props: { response: string }) {
  return (
    <div
      className={`${inputResponseSE} ${inputResponseIE} ${inputResponseXS} ${inputResponseSS} ${inputResponseSM} ${inputResponseMD} mt-[15px] whitespace-pre-wrap bg-white py-[18px] px-[20px] shadow-gray-20`}
    >
      <p>{props.response}</p>
    </div>
  );
}
