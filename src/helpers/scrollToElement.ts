import { MutableRefObject } from "react";

const scrollToElement = (element: MutableRefObject<HTMLDivElement>) => {
    element.current.scrollIntoView({ behavior: "smooth" });
};

export default scrollToElement