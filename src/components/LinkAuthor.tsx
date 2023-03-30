import React from "react";

const linkAuthorSE = "se:text-[10px]";
const linkAuthorIE = "ie:text-[11px]";
const linkAuthorXS = "xs:text-[13px]";
const linkAuthorSS = "ss:text-[16px]";
const linkAuthorSM = "sm:text-[15px]";
const linkAuthorMD = "md:text-[15px]";

export default function LinkAuthor() {
  return (
    <div className="mt-[25px]">
      <div
        className={`${linkAuthorSE} ${linkAuthorIE} ${linkAuthorXS} ${linkAuthorSS} ${linkAuthorSM} ${linkAuthorMD}  text-center`}
      >
        <a
          className="whitespace-nowrap underline"
          href="https://t.me/Digitalntelligence"
        >
          Наш телеграмм канал с новостями и полезным контентом
        </a>
      </div>
    </div>
  );
}
