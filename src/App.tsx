import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import store from "store";

function App() {
  const [isChat, setChat] = useState(
    store.get("isChat") ?? store.set("isChat", "home")
  );

  const toggleChat = () => {
    setChat(isChat === "chat" ? "home" : "chat");
  };

  useEffect(() => {
    store.set("isChat", isChat);
  }, [isChat]);

  return (
    <div className="app bg-light-400">
      <Header isChat={isChat} toggleChat={toggleChat} />
      {isChat === "chat" ? (
        <div>
          <Chat />
        </div>
      ) : (
        <div>
          <Body />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
