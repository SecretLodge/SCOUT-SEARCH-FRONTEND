import { useEffect, useState } from "react";
import ButtonHome from "./ButtonHome";
import Description from "./Description";
import SearchForm from "./SearchForm";
import store from "store";
import Logo from "./Logo";

export default function Body() {
  const [pressed, setPressed] = useState(store.get("button")?.pressed);

  useEffect(() => {
    store.set("button", { pressed: pressed });
  }, [pressed]);

  const pressButton = () => setPressed(true);

  return (
    <>
      <Logo />
      {pressed ? (
        <>
          <SearchForm />
        </>
      ) : (
        <>
          <Description />
          <ButtonHome pressButton={pressButton} />
        </>
      )}
    </>
  );
}
