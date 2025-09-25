import { useEffect, useState } from "react"
import MessagesList from "../../Components/MessagesList/MessagesList"
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm"
import { useParams } from "react-router"
import { getContactById } from "../../services/contactService"

const ScreenMessage = () => {

  const { id_contacto } = useParams()
  const contact = getContactById(id_contacto);

  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  function loadContact() {
    setLoading(true)
    setTimeout(() => {
      setMessages(contact.messages)
      setLoading(false)
    }, 1000);
  }

  useEffect(() => {
    loadContact()
  }, [id_contacto])

  const onCreateNewMessage = (new_message) => {
    const new_message_object = {
      content: new_message,
      author: 'YO',
      timestamp: '19:00',
      id: messages.length + 1
    }
    const messages_cloned = [...messages]
    messages_cloned.push(new_message_object)
    setMessages(messages_cloned)
  }

  return (
    <div className="screenMessage">
      {loading ? <p>Loading...</p>
        : 
        <div>
          <h3>{contact.name}</h3>
          <MessagesList messages={messages} />
          <NewMessageForm onCreateNewMessage={onCreateNewMessage} />
        </div>}
    </div>
  )
}

export default ScreenMessage