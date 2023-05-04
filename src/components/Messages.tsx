import { chatResponseModel } from "@/helpers/chatRequest";

const inputResponse =
  "se:rounded-[12px] ie:rounded-[12px] xs:rounded-[12px] ss:rounded-[12px] sm:rounded-[9px] md:rounded-[9px] mt-[10px] max-w-[500px] bg-light-300";
const TextStyles = "whitespace-pre-wrap py-[15px] px-[20px] text-light-100";

export default function Messages(props: { allMessages: chatResponseModel[] }) {
  return (
    <div>
      {props.allMessages.map((item, index) => (
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
  );
}
