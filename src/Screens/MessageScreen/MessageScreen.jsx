import MessagesList from "../../Components/MessagesList/MessagesList"
import NewMessageForm from "../../Components/NewMessageForm/NewMessageForm"
import ContactLayout from "../../Components/ContactLayout/ContactLayout"
import { useContext } from "react"
import { ContactDetailContext } from "../../Context/ContactDetailContext"
import ContactHeader from "../../ContactHeader/ContactHeader"
import './MessageScreen.css'

const ScreenMessage = () => {

  const {loading,contactDetail,onCreateNewMessage} = useContext(ContactDetailContext)

  return (
    <div className="screenMessage">
      <ContactLayout />
      {loading || !contactDetail ? <p>Loading...</p>
        : 
        <div className="screenMessage-content">
          <ContactHeader 
            photo={contactDetail.profile_photo}
            name={contactDetail.name}
            last_connection={contactDetail.last_time_connected}
            is_connected={contactDetail.is_connected}
          />
          <MessagesList messages={contactDetail.messages} />
          <NewMessageForm onCreateNewMessage={onCreateNewMessage} />
        </div>}
    </div>
  )
}

export default ScreenMessage