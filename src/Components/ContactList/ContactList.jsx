import Contact from "../Contact/Contact"
import { Link } from "react-router"
import { useContext } from "react"
import { ContactListContext } from "../../Context/ContactListContext"
import { BeatLoader } from "react-spinners"
import './ContactList.css'

const ContactList = () => {

  const {contactList,resultsContacts,loading} = useContext(ContactListContext)

  const contactsToShow = resultsContacts.length >= 1 ? resultsContacts : contactList
 
  return (
    <div className="contactList">
      {loading ? <div className="loader"><BeatLoader color="#fff"/></div> :
        contactsToShow.map((contact) => (
          <Link to={`/contacto/` + contact.id} key={contact.id}>
            <Contact photoProfile={contact.profile_photo} name={contact.name} last_time={contact.last_time_conneceted} isConnected={contact.is_connected ? 'En linea' : ''} state={contact.state} />
          </Link>
        ))
      }
    </div>
  )
}

export default ContactList