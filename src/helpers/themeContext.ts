import { createContext } from "react";
import store from "store";

export const ThemeContext = createContext(
    store.get("theme") ?? store.set("theme", "light")
  );