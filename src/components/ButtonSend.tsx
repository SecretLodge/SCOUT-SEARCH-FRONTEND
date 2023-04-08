const buttonSendSE = "se:rounded-[12px]";
const buttonSendIE = "ie:rounded-[12px]";
const buttonSendXS = "xs:rounded-[12px]";
const buttonSendSS = "ss:rounded-[12px]";
const buttonSendSM = "sm:rounded-[9px]";
const buttonSendMD = "md:rounded-[9px]";

export default function ButtonSend(props: {
  sendRequest: () => void;
  buttonPressed: boolean;
}) {
  return (
    <button
      className={`${
        props.buttonPressed ? "cursor-not-allowed" : ""
      } ml-[10px] ${buttonSendSE} ${buttonSendIE} ${buttonSendXS} ${buttonSendSS} ${buttonSendSM} ${buttonSendMD} bg-blue-100 px-[20px] duration-500 hover:shadow-blue-10`}
      onClick={() => props.sendRequest()}
    >
      {props.buttonPressed ? (
        <svg
          className="h-[20px] w-[20px] animate-spin text-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        <img className="h-[20px]" src="/send.png" alt="send" />
      )}
    </button>
  );
}
