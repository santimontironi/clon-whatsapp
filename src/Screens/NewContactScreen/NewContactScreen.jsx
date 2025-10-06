import './NewContactScreen.css'
import { useContext } from 'react'
import { ContactListContext } from '../../Context/ContactListContext'
import { useState } from 'react'

const NewContactScreen = () => {

    const[inputName,setInputName] = useState("")
    const[inputNumber,setInputNumber] = useState("")

    const {addContact} = useContext(ContactListContext)

    function handleSubmit(e){
        e.preventDefault()

        if(inputName === '' || inputNumber === '') return

        const contactToAdd = {
            name: inputName,
            number: inputNumber
        }

        addContact(contactToAdd)
        setInputName("")
        setInputNumber("")
    }

    return (
        <div className="newContactScreen">
            <div className="newContactScreen-content">
                <form className='newContactScreen-content-form' onSubmit={handleSubmit}>
                    <div className="newContactScreen-content-form-field">
                        <label htmlFor="contactName">Nombre</label>
                        <input type="text" name='contactName' id='contactName' onChange={(e) => setInputName(e.target.value)} />
                    </div>
                    <div className="newContactScreen-content-form-field">
                        <label htmlFor="contactNumber">Número</label>
                        <input type="text" name='contactNumber' id='contactNumber' onChange={(e) => setInputNumber(e.target.value)} />
                    </div>
                    <button type='submit'>Agregar contacto</button>
                </form>
            </div> 
        </div>
    )
}

export default NewContactScreen