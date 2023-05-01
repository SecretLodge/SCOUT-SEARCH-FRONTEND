import { useEffect, useState } from "react";
import ButtonHome from "./ButtonHome";
import Description from "./Description";
import SearchForm from "./SearchForm";
import store from "store";

export default function Body(props: { toggleChat: (value: boolean) => void }) {
  const [pressed, setPressed] = useState(store.get("button")?.pressed);

  useEffect(() => {
    store.set("button", { pressed: pressed });
  }, [pressed]);

  const pressButton = () => setPressed(true);

  return (
    <>
      {pressed ? (
        <SearchForm toggleChat={props.toggleChat} />
      ) : (
        <>
          <Description />
          <ButtonHome pressButton={pressButton} />
        </>
      )}
    </>
  );
}
