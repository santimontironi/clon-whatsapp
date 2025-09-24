import { IoAddOutline } from "react-icons/io5";
import { PiStickerBold } from "react-icons/pi";
import { IoMdSend } from "react-icons/io";
import './NewMessageForm.css'

const NewMessageForm = ({onCreateNewMessage}) => {
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value

        onCreateNewMessage(message_value)

        form.reset()
    }

    return (
        <div className='newMessageForm'>
            <form onSubmit={handleSubmit}>
                <div className="newMessageForm-left-button">
                    <IoAddOutline color="#ffffff" size={25} />
                    <PiStickerBold color="#ffffff" size={25} />
                </div>
                <input type="text" id='mensaje' name='mensaje' placeholder="Escribe un mensaje" />
                <div className="newMessageForm-right-button">
                    <button type="submit"><IoMdSend color="#ffffff" size={25} /></button>
                </div>
            </form>
        </div>
    )
}

export default NewMessageForm