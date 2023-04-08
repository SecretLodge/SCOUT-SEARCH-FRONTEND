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
            <div className="flex items-center">
              <img
                src={item.favicons.high_res}
                className="mr-[5px] flex h-[15px]"
              />
              <a
                className="text-blue-10 font-medium text-blue-100 underline hover:text-yellow-20"
                href={item.url}
                target="_blank"
              >
                {item.title}
              </a>
            </div>
            <div>
              <a
                className="text-[15px] font-medium text-light-100 hover:underline"
                href={item.url}
                target="_blank"
              >
                {new URL(item.url).hostname}
              </a>
            </div>
            <div>
              <p className="text-light-100">{item.description}</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
