import { createContext } from "react"
import { useState, useEffect } from "react"
import { Outlet, useParams } from "react-router"
import { getContactById } from "../services/contactService"

export const ContactDetailContext = createContext()

export const ContactDetailProvider = () => {

    const [loading, setLoading] = useState(false)
    const [contactDetail, setContactDetail] = useState(null)

    const { id_contacto } = useParams()


    useEffect(() => {
        function loadContactById() {
            setLoading(true)
            setTimeout(() => {
                const contact = getContactById(id_contacto)
                setContactDetail(contact)
                setLoading(false)
            }, 1000)
        }
        loadContactById()
    }, [id_contacto])


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