const discriptionSE = "se:leading-[22px] se:text-[13px]";
const discriptionIE = "ie:leading-[24px] ie:text-[14px]";
const discriptionXS = "xs:leading-[25px] xs:text-[15px]";
const discriptionSM = "sm:leading-[34px] sm:text-[20px]";
const discriptionSS = "ss:leading-[34px] ss:text-[20px]";
const discriptionMD =
  "md:leading-[25px] md:text-[15px] md:mr-[6.5px] md:ml-[-5px]";
const discriptionOther = "text-justify text-light-100";
const discriptoin = `${discriptionMD} ${discriptionSM} ${discriptionSS} ${discriptionXS} ${discriptionIE} ${discriptionSE} ${discriptionOther}`;

const discriptionOptSE = "se:mt-[30px] se:max-w-[285px]";
const discriptionOptIE = "ie:mt-[40px] ie:max-w-[332px]";
const discriptionOptXS = "xs:mt-[50px] xs:max-w-[381px]";
const discriptionOptSS = "ss:mt-[44px] ss:max-w-[581px]";
const discriptionOptSM = "sm:mt-[70px] sm:max-w-[625px]";
const discriptionOptMD = "md:mt-[40px] md:max-w-[870px]";
const discriptionOptOther = "mx-auto";
const discriptionOpt = `${discriptionOptMD} ${discriptionOptSM} ${discriptionOptSS} ${discriptionOptXS} ${discriptionOptIE} ${discriptionOptSE} ${discriptionOptOther}`;

export default function Description() {
  return (
    <div className={`${discriptionOpt}`}>
      <div className={discriptoin}>
        SCOUT SEARCH — это первый и единственный в России поисковик, который
        использует исключительно искусственный интеллект. Он позволяет получать
        мгновенные ответы на запросы, например, "предоставь мне топ 10 лучших
        инструментов для поиска информации по email" или "составь историческую
        справку о возникновении масонов". Scout формирует выдачу персонально,
        адаптируясь под текст запроса и используя огромную базу знаний. Просто
        попробуйте задать любой вопрос — и увидите сами!
      </div>
    </div>
  );
}
