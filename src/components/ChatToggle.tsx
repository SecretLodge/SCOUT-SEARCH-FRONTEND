const buttonSendSE = "se:rounded-[12px]";
const buttonSendIE = "ie:rounded-[12px]";
const buttonSendXS = "xs:rounded-[12px]";
const buttonSendSS = "ss:rounded-[12px]";
const buttonSendSM = "sm:rounded-[9px]";
const buttonSendMD = "md:rounded-[9px]";
const buttonSendOther = "mr-[16px] mt-[16px] bg-light-300 shadow-gray-20";
const buttonSend = `${buttonSendSE} ${buttonSendIE} ${buttonSendXS} ${buttonSendSS} ${buttonSendSM} ${buttonSendMD} ${buttonSendOther}`;

export default function ChatToggle(props: {
  theme: string;
  isChat: string;
  toggleChat: () => void;
}) {
  return (
    <button className={buttonSend} onClick={() => props.toggleChat()}>
      <img
        className="h-[60px] p-[18px]"
        src={`/${props.theme}_${props.isChat}.png`}
        alt="Change Theme"
      />
    </button>
  );
}
