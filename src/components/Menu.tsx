import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";
import store from "store";
import ChatToggle from "./ChatToggle";

export default function Menu(props: {
  toggleChat: () => void;
  isChat: string;
}) {
  const [theme, setTheme] = useState<string>(
    store.get("theme") ?? store.set("theme", "light")
  );

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    store.set("theme", theme);
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div className="flex justify-end">
      <ThemeToggle theme={theme} handleTheme={handleTheme} />
      <ChatToggle
        theme={theme}
        isChat={props.isChat}
        toggleChat={props.toggleChat}
      />
    </div>
  );
}
