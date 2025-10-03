import { SyncLoader } from "react-spinners"
import { useContext } from "react"
import { ContactDetailContext } from "../../Context/ContactDetailContext"
import './ContactDataScreen.css'

const ContactDataScreen = () => {

    const {loading,contactDetail} = useContext(ContactDetailContext)


    return (
        <div className="contactDataScreen">
            {loading ? (
                <SyncLoader className="loader"/>
            ) : (
                <div className="contactDataScreen-container">
                    <h1 className="contactDataScreen-container-title">Info del contacto</h1>
                    <div className="contactDataScreen-container-content">
                        <img className="contactDataScreen-container-content-photo" src={contactDetail.profile_photo} alt={`Foto de perfil de ${contactDetail.name}`} />
                        <span className="contactDataScreen-container-content-name">{contactDetail.name}</span>
                        <span className="contactDataScreen-container-content-number">{contactDetail.number}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactDataScreen