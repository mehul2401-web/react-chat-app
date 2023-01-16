import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import "./App.css";

const projectID = "8fd74cab-4846-4ef3-a03e-0586ddfd9329";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
    />
  );
};

export default App;
