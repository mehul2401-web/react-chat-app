import { ChatEngine } from "react-chat-engine";
import "./App.css";

const projectID = "8fd74cab-4846-4ef3-a03e-0586ddfd9329";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={"me-hulk"}
      userSecret={"1234"}
    />
  );
};

export default App;
