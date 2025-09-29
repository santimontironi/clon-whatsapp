import Contact from "../Contact/Contact"
import { getAllContacts } from "../../services/contactService"
import { Link } from "react-router"
import { useState, useEffect } from "react"
import './ContactList.css'

const ContactList = () => {

  const [loading, setLoading] = useState(false)
  const [contacts, setContacts] = useState([])

  const allContacts = getAllContacts()

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setContacts(allContacts)
      setLoading(false)
    }, 1000)
  },[])

  return (
    <div className="contactList">
      {loading ? 'loading...' :
        contacts.map((contact) => (
          <Link to={`/contacto/` + contact.id} key={contact.id}>
            <Contact photoProfile={contact.profile_photo} name={contact.name} last_time={contact.last_time_conneceted} isConnected={contact.is_connected ? 'En linea' : ''} state={contact.state} />
          </Link>
        ))
      }
    </div>
  )
}

export default ContactList