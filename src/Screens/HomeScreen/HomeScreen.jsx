import notMessages from './../../static/img/notMessages.png'
import ContactLayout from "../../Components/ContactLayout/ContactLayout"
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className="home-screen">
        <ContactLayout/>
        <div className="home-screen-empty">
            <img src={notMessages} alt="notMessage" />
            <span>Aún no has seleccionado ningún contacto.</span>
        </div>
    </div>
  )
}

export default HomeScreen