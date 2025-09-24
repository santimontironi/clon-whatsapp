import './HeaderContact.css'
import { RiChatNewFill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import ButtonContacts from '../ButtonContacts/ButtonContacts';

const HeaderContact = () => {
    return (
        <header className="headerContact">

            <div className='headerContact-top'>
                <span>WhatsApp</span>
                <div className="headerContact-top-icons">
                    <RiChatNewFill color='white' fontSize={20} className='headerContact-top-icons-icon' />
                    <SlOptionsVertical color='white' fontSize={20} className='headerContact-top-icons-icon' />
                </div>
            </div>

            <div className='headerContact-bottom'>
                <form>
                    <input type="text" placeholder='Buscar o empezar un nuevo chat' />
                    <CiSearch className='icon-search' color='white' fontSize={20} />
                </form>
                <div className="headerContact-bottom-buttons">
                    <ButtonContacts text='Todos' />
                    <ButtonContacts text='No leídos' />
                    <ButtonContacts text='Favoritos' />
                    <ButtonContacts text='Grupos' />
                </div>
            </div>
        </header>
    )
}

export default HeaderContact