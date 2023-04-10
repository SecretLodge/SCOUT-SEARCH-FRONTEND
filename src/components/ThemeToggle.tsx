import { useEffect, useState } from "react";
import store from "store";

const buttonSendSE = "se:rounded-[12px]";
const buttonSendIE = "ie:rounded-[12px]";
const buttonSendXS = "xs:rounded-[12px]";
const buttonSendSS = "ss:rounded-[12px]";
const buttonSendSM = "sm:rounded-[9px]";
const buttonSendMD = "md:rounded-[9px]";
const buttonSendOther = "mr-[16px] mt-[16px] bg-light-300 shadow-gray-20";
const buttonSend = `${buttonSendSE} ${buttonSendIE} ${buttonSendXS} ${buttonSendSS} ${buttonSendSM} ${buttonSendMD} ${buttonSendOther}`;

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    store.get("theme") ?? store.set("theme", "light")
  );

  useEffect(() => {
    store.set("theme", theme);
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <button
      className={buttonSend}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <img
        className="h-[60px] p-[18px]"
        src={`/${theme}.png`}
        alt="Change Theme"
      />
    </button>
  );
}
