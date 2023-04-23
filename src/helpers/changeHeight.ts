import { ChangeEvent } from "react";

const changeHeight = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.style.height = "0px";
    const scrollHeight = event.target.scrollHeight;
    event.target.style.height = scrollHeight + "px";
    if (event.target.clientHeight >= 180)
      event.target.style.height = 180 + "px";
};

export default changeHeight