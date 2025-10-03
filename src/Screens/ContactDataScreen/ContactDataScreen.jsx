import { SyncLoader } from "react-spinners"
import { useContext } from "react"
import { ContactDetailContext } from "../../Context/ContactDetailContext"
import { IoArrowBackOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";
import './ContactDataScreen.css'

const ContactDataScreen = () => {

    const {loading,contactDetail} = useContext(ContactDetailContext)


    return (
        <div className="contactDataScreen">
            {loading || !contactDetail ?  (
                <SyncLoader className="loader"/>
            ) : (
                <div className="contactDataScreen-container">
                    <header className="contactDataScreen-container-header">
                        <Link to="/">
                            <IoArrowBackOutline className="contactDataScreen-container-header-icon" color="#ffffff" size={30} />
                        </Link>
                        <h1 className="contactDataScreen-container-title">Info del contacto</h1>
                    </header>
                    <div className="contactDataScreen-container-content">
                        <figure className="contactDataScreen-container-content-photo">
                            <img className="contactDataScreen-container-content-photo-img" src={contactDetail.profile_photo} alt={`Foto de perfil de ${contactDetail.name}`} />
                        </figure>
                        <span className="contactDataScreen-container-content-name">Contacto: {contactDetail.name}</span>
                        <span className="contactDataScreen-container-content-number"><FaPhoneAlt color="#fff" size={20} /> {contactDetail.number}</span>
                        <span className="contactDataScreen-container-content-state">Estado: {contactDetail.state}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactDataScreen