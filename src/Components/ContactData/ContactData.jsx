import { IoMdClose } from "react-icons/io";
import { useState } from "react"
import './ContactData.css'

const ContactData = ({ contact }) => {

    const [close, setClose] = useState(false)

    return (
        <div className={`contactData ${close ? "close" : ""}`}>

            <div className="contactData-container">
                <header className="contactData-container-header">
                    <IoMdClose className="contactData-container-header-icon" color="#ffffff" size={30} onClick={() => { setClose(!close) }} />
                    <span className="contactData-container-header-title">Info del contacto</span>
                </header>
                <div className="contactData-container-content">
                    <figure className="contactData-container-content-photo">
                        <img className="contactData-container-content-photo-img" src={contact.photo} alt={`Foto de perfil de ${contact.name}`} />
                    </figure>
                    <span className="contactData-container-content-name">{contact.name}</span>
                    <span className="contactData-container-content-number">{contact.number}</span>
                </div>
                <div className="contactData-container-state">
                    <span className="contactData-container-state-title">Info.</span>
                    <span className="contactData-container-state-content">{contact.state}</span>
                </div>
            </div>

        </div>
    )
}

export default ContactData