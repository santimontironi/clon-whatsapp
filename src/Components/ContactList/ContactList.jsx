import Contact from "../Contact/Contact"
import { getAllContacts } from "../../services/contactService"
import { Link } from "react-router"
import './ContactList.css'

const ContactList = () => {

  const contacts = getAllContacts()

  return (
    <div className="contactList">
      {contacts.map((contact) => (
        <Link to={`/contacto/` + contact.id} key={contact.id}>
          <Contact photoProfile={contact.profile_photo} name={contact.name} last_time={contact.last_time_conneceted} isConnected={contact.is_connected ? 'En linea' : ''} state={contact.state}/>
        </Link>
      ))}
    </div>
  )
}

export default ContactList