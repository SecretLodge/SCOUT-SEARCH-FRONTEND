const inputRequestSE = "se:rounded-[12px]";
const inputRequestIE = "ie:rounded-[12px] ";
const inputRequestXS = "xs:rounded-[12px] ";
const inputRequestSS = "ss:rounded-[12px] ";
const inputRequestSM = "sm:rounded-[9px] ";
const inputRequestMD = "md:rounded-[9px] ";

export default function InputRequest(props: {
  setRequest: (value: string) => void;
  sendRequest: () => void;
}) {
  return (
    <input
      className={`${inputRequestSE} ${inputRequestIE} ${inputRequestXS} ${inputRequestSS} ${inputRequestSM} ${inputRequestMD} grow bg-light-300 py-[18px] px-[20px] text-light-100 shadow-gray-20`}
      placeholder="Введите ваш запрос"
      id="search"
      name="search"
      type="search"
      onChange={(event) =>
        props.setRequest((event.target as HTMLInputElement).value)
      }
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          props.sendRequest();
        }
      }}
    />
  );
}
