import Message from "../Message/Message"
import './MessagesList.css'

const MessagesList = ({ messages }) => {

  return (
    <div>
      {messages.map((message) => {
        return <Message content={message.content} id={message.id} key={message.id} author={message.author} message={message.message} timestamp={message.timestamp} />
      })
      }
    </div>
  )
}

export default MessagesList