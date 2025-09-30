import notMessages from '/img/notMessages.png'
import ContactLayout from "../../Components/ContactLayout/ContactLayout"
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className="home-screen">
        <ContactLayout/>
        <div className="home-screen-empty">
            <img src={notMessages} alt="notMessage" />
            <h2>Descarga WhatsApp para Windows</h2>
            <p>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia mas rápida.</p>
            <button>Descargar</button>
        </div>
    </div>
  )
}

export default HomeScreen