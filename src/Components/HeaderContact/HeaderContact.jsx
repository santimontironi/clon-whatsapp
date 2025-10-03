import './HeaderContact.css'
import { RiChatNewFill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import ButtonContacts from '../ButtonContacts/ButtonContacts';
import FormSearch from '../FormSearch/FormSearch';

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
                <FormSearch/>
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