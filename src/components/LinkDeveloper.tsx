const linkMarginSE = "se:mt-[30px] se:text-[12px]";
const linkMarginIE = "ie:mt-[40px] ie:text-[12px]";
const linkMarginXS = "xs:mt-[50px] xs:text-[12px]";
const linkMarginSS = "ss:mt-[50px] ss:text-[16px]";
const linkMarginSM = "sm:mt-[50px] sm:text-[12px]";
const linkMarginMD = "md:mt-[60px] md:text-[12px]";

export default function LinkDeveloper() {
  return (
    <div
      className={`${linkMarginSE} ${linkMarginIE} ${linkMarginXS} ${linkMarginSS} ${linkMarginSM} ${linkMarginMD}`}
    >
      <div className="flex">
        <p className=" text-gray-30">DEVELOPED AND DESIGN BY</p>
        <a
          className="bg-gradient-to-r from-yellow-10 to-yellow-20 bg-clip-text font-medium text-transparent hover:animate-spin"
          href="https://t.me/notuchmeplz"
        >
          @notuchmeplz
        </a>
      </div>
    </div>
  );
}
