import ContactList from "../../Components/ContactList/ContactList"
import HeaderContact from "../../Components/HeaderContact/HeaderContact"
import SideNav from "../../Components/SideNav/SideNav"
import notMessages from './../../static/img/notMessages.png'
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className="home-screen">
        <div className="home-screen-content">
            <SideNav/>
            <div className="contact-list">
                <HeaderContact/>
                <ContactList/>
            </div>
        </div>
        <div className="home-screen-empty">
            <img src={notMessages} alt="notMessage" />
            <span>Aún no has seleccionado ningún contacto.</span>
        </div>
    </div>
  )
}

export default HomeScreen