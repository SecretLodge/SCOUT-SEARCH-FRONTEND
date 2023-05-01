import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { useState } from "react";
import Chat from "./components/Chat";

function App() {
  const [isChat, setChat] = useState(false);

  const toggleChat = (value: boolean) => {
    setChat(value);
  };

  return (
    <div className="app bg-light-400">
      {isChat ? (
        <div>
          <Chat />
        </div>
      ) : (
        <div>
          <Header />
          <Body toggleChat={toggleChat} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
