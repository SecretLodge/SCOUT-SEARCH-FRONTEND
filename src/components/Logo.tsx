const headerSE = "se:text-[36px] se:leading-[42px] se:tracking-[0.055em]";
const headerIE = "ie:text-[42px] ie:leading-[49px] ie:tracking-[0.055em]";
const headerXS = "xs:text-[48px] xs:leading-[56px] xs:tracking-[0.055em]";
const headerSS = "ss:text-[64px] ss:leading-[75px] ss:tracking-[0.15em]";
const headerSM = "sm:text-[64px] sm:leading-[75px] sm:tracking-[0.23em]";
const headerMD = "md:text-[96px] md:leading-[112px] md:tracking-[0.16em]";
const headerOther = "font-bold text-light-100";
const header = `${headerMD} ${headerSM} ${headerSS} ${headerXS} ${headerIE} ${headerSE} ${headerOther}`;

const headerSecondSE = "se:text-[15px] se:leading-[18px] se:tracking-[0.11em]";
const headerSecondIE = "ie:text-[18px] ie:leading-[21px] ie:tracking-[0.1em]";
const headerSecondXS = "xs:text-[20px] xs:leading-[23px] xs:tracking-[0.115em]";
const headerSecondSS = "ss:text-[32px] ss:leading-[38px] ss:tracking-[0.08em]";
const headerSecondSM = "sm:text-[32px] sm:leading-[38px] sm:tracking-[0.14em]";
const headerSecondMD = "md:text-[15px] md:leading-[18px] md:tracking-[1.45em]";
const headerSecondOther = "text-light-200";
const headerSecond = `${headerSecondMD} ${headerSecondSM} ${headerSecondSS} ${headerSecondXS} ${headerSecondIE} ${headerSecondSE} ${headerSecondOther}`;

const headerMarginSE = "se:mt-[40px]";
const headerMarginIE = "ie:mt-[45px]";
const headerMarginXS = "xs:mt-[55px]";
const headerMarginSS = "ss:mt-[99px]";
const headerMarginSM = "sm:mt-[123px]";
const headerMarginMD = "md:mt-[200px]";
const headerMargin = `${headerMarginSE} ${headerMarginIE} ${headerMarginXS} ${headerMarginSS} ${headerMarginSM} ${headerMarginMD}`;

export default function Logo() {
  return (
    <div className="text-center">
      <div className={headerMargin}>
        <h1 className={header}>SCOUT SEARCH</h1>
      </div>
      <div className={headerSecond}>
        <h2>поиск в интернете с помощью ии</h2>
      </div>
    </div>
  );
}
