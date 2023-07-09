import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced"
import StanderMessageForm from "./MessageForm/StanderMessageForm"
import Header from "./Header"
function Chat() {
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "usertrained",
        "1234"
    )
  return (
    <div style={ {flexBasis: "100%"} }>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow 
          {...chatProps}
          style={{ height: "100vh" }}
          renderChatHeader={(chat)  => <Header chat={chat} />}
          renderMessageForm={(props) => {
           return (
            <StanderMessageForm props={props} activeChat={chatProps.chat} />
        )}
    }
        />
    </div>
  )
}
export default Chat