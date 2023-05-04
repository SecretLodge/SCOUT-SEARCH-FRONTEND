import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { useState } from "react";
import Chat from "./components/Chat";

function App() {
  const [isChat, setChat] = useState(false);

  const toggleChat = () => {
    setChat(isChat ? false : true);
  };

  return (
    <div className="app bg-light-400">
      <Header toggleChat={toggleChat} />
      {isChat ? (
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
