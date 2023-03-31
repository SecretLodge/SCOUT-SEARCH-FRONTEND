import item from "@/helpers/itemModel";
import React from "react";

const inputResponseSE = "se:rounded-[12px]";
const inputResponseIE = "ie:rounded-[12px]";
const inputResponseXS = "xs:rounded-[12px]";
const inputResponseSS = "ss:rounded-[12px]";
const inputResponseSM = "sm:rounded-[9px]";
const inputResponseMD = "md:rounded-[9px]";

export default function InputSearchResponse(props: { response: item[] }) {
  return (
    <React.Fragment>
      {props.response.map((item: item) => {
        return (
          <div
            className={`${inputResponseSE} ${inputResponseIE} ${inputResponseXS} ${inputResponseSS} ${inputResponseSM} ${inputResponseMD} mt-[15px] bg-white py-[18px] px-[20px] shadow-gray-20`}
          >
            <div>
              <a className="font-medium" href={item.link} target="_blank">
                {item.title}
              </a>
            </div>
            <div>
              <a
                className="text-[15px] font-medium text-blue-10 underline "
                href={item.displayLink}
                target="_blank"
              >
                {item.displayLink}
              </a>
            </div>
            <div>
              <p>{item.snippet}</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
