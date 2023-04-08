const linkAuthorSE = "se:text-[10px]";
const linkAuthorIE = "ie:text-[11px]";
const linkAuthorXS = "xs:text-[13px]";
const linkAuthorSS = "ss:text-[16px]";
const linkAuthorSM = "sm:text-[15px]";
const linkAuthorMD = "md:text-[15px]";
const linkAuthorOther = "text-center";
const linkAuthor = `${linkAuthorSE} ${linkAuthorIE} ${linkAuthorXS} ${linkAuthorSS} ${linkAuthorSM} ${linkAuthorMD} ${linkAuthorOther} `;

export default function LinkAuthor() {
  return (
    <div className="mt-[25px]">
      <div className={linkAuthor}>
        <a
          className="whitespace-nowrap text-light-100 underline"
          href="https://t.me/Digitalntelligence"
        >
          Наш телеграмм канал с новостями и полезным контентом
        </a>
      </div>
    </div>
  );
}
