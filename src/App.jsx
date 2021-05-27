import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed.jsx";
import LoginForm from "./components/LoginForm.jsx";
import "./App-Styles.css";

export default function App() {
  // console.log("App");
  if (!localStorage.getItem("sweet_and_social_username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem("sweet_and_social_username")}
      userSecret={localStorage.getItem("sweet_and_social_password")}
      projectID="3488a831-40e0-4157-9fe7-dcc42b6e63d0"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}
