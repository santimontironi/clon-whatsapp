import { IoArrowBackOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";
import './ContactData.css'

const ContactData = ({contact}) => {

    return (
        <div className="contactDataScreen">

            <div className="contactDataScreen-container">
                <header className="contactDataScreen-container-header">
                    <Link to="/">
                        <IoArrowBackOutline className="contactDataScreen-container-header-icon" color="#ffffff" size={30} />
                    </Link>
                    <h1 className="contactDataScreen-container-title">Info del contacto</h1>
                </header>
                <div className="contactDataScreen-container-content">
                    <figure className="contactDataScreen-container-content-photo">
                        <img className="contactDataScreen-container-content-photo-img" src={contact.photo} alt={`Foto de perfil de ${contact.name}`} />
                    </figure>
                    <span className="contactDataScreen-container-content-name">Contacto: {contact.name}</span>
                    <span className="contactDataScreen-container-content-number"><FaPhoneAlt color="#fff" size={20} /> {contact.number}</span>
                    <span className="contactDataScreen-container-content-state">Estado: {contact.state}</span>
                </div>
            </div>

        </div>
    )
}

export default ContactData