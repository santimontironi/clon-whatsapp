import { createContext } from "react"
import { useState, useEffect } from "react"
import { Outlet, useParams } from "react-router"
import { getContactById } from "../services/contactService"
import { useContext } from "react"
import { ContactListContext } from "./ContactListContext"

export const ContactDetailContext = createContext()

export const ContactDetailProvider = () => {

    const [loading, setLoading] = useState(false)
    const [contactDetail, setContactDetail] = useState(null)

    const { id_contacto } = useParams()

    const {contactList} = useContext(ContactListContext)


    useEffect(() => {
        function loadContactById() {
            setLoading(true)
            setTimeout(() => {
                const contactFind = contactList.find(contact => contact.id === parseInt(id_contacto))
                setContactDetail(contactFind)
                setLoading(false)
            }, 1000)
        }
        loadContactById()
    }, [id_contacto, contactList])


    const onCreateNewMessage = (new_message) => {
        const now = new Date()
        if (!new_message) return
        const new_message_object = {
            content: new_message,
            author: 'YO',
            timestamp: '' + now.getHours() + ':' + (now.getMinutes()),
            id: contactDetail.messages.length + 1
        }
        const messages_cloned = [...contactDetail.messages, new_message_object]
        setContactDetail({ ...contactDetail, messages: messages_cloned })
    }


    return <ContactDetailContext.Provider value={{ loading, contactDetail, onCreateNewMessage }}>
        <Outlet />
    </ContactDetailContext.Provider>
}