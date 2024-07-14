import { ChatEngine } from "react-chat-engine";
import  ChatFeed  from './components/ChatFeed';
import './App.css';
const App = () =>{
    
    return(
        <ChatEngine
        height="100vh"
        projectID="194295aa-c5c5-4393-8651-9a4dd34c97c5"
        userName="javascriptmastery"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    );
}
export default App;

