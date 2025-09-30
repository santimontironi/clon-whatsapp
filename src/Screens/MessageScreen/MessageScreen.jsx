import MessagesList from "../../Components/MessagesList/MessagesList"
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm"
import ContactLayout from "../../Components/ContactLayout/ContactLayout"
import { useContext } from "react"
import { ContactDetailContext } from "../../Context/ContactDetailContext"
import './MessageScreen.css'

const ScreenMessage = () => {

  const {loading,contactDetail,onCreateNewMessage} = ContactDetailContext()


  return (
    <div className="screenMessage">
      <ContactLayout />
      {loading ? <p>Loading...</p>
        : 
        <div className="screenMessage-content">
          <MessagesList messages={contactDetail.messages} />
          <NewMessageForm onCreateNewMessage={onCreateNewMessage} />
        </div>}
    </div>
  )
}

export default ScreenMessage