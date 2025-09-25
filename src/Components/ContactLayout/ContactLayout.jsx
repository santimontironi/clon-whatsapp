import SideNav from "../SideNav/SideNav"
import HeaderContact from "../HeaderContact/HeaderContact"
import ContactList from "../ContactList/ContactList"
import './ContactLayout.css'

const ContactLayout = () => {
    return (
        <div className="contact-layout-content">
            <SideNav />
            <div className="contact-layout">
                <HeaderContact />
                <ContactList />
            </div>
        </div>
    )
}

export default ContactLayout