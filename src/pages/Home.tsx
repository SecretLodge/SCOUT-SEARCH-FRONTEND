import Header from "@/components/Header";
import Description from "@/components/Description";
import { useState, useEffect } from "react";
import store from "store";
import ButtonHome from "@/components/ButtonHome";
import SearchForm from "@/components/SearchForm";
import LinkAuthor from "@/components/LinkAuthor";

const Home = () => {
  const [pressed, setPressed] = useState(store.get("button")?.pressed);

  useEffect(() => {
    store.set("button", { pressed: pressed });
  }, [pressed]);

  const pressButton = () => setPressed(true);

  return (
    <div>
      <Header />
      {pressed ? (
        <SearchForm />
      ) : (
        <>
          <Description />
          <ButtonHome pressButton={pressButton} />
        </>
      )}
      <LinkAuthor />
    </div>
  );
};

export default Home;
