import { ChatEngine } from "react-chat-engine";

import "./App.css";

import ChatFeed from "./components/ChatFeed";

const App = () => {
    return (
        <ChatEngine
            height     = "100vh"
            projectID  = "9d162745-e07c-4e9e-91e3-dd5e76791699"
            userName   = "Admin"
            userSecret = "12345"
            renderChatFeed = {(chatAppProps) => <ChatFeed { ...chatAppProps } /> }
        />
    );
}

export default App;