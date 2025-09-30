import { createContext } from "react"
import { useState, useEffect } from "react"
import { Outlet, useParams } from "react-router"
import { getContactById } from "../services/contactService"

export const ContactDetailContext = createContext()

export const ContactDetailProvider = () => {

    const [loading, setLoading] = useState(false)
    const [contactDetail, setContactDetail] = useState([])

    const { id_contacto } = useParams()

    const onCreateNewMessage = (new_message) => {
        const new_message_object = {
            content: new_message,
            author: 'YO',
            timestamp: '19:00',
            id: messages.length + 1
        }
        const messages_cloned = [...contactDetail.messages]
        messages_cloned.push(new_message_object)
        setContactDetail({...contactDetail,messages_cloned})
    }

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

    return <ContactDetailContext.Provider value={{ loading, contactDetail, onCreateNewMessage }}>
        <Outlet />
    </ContactDetailContext.Provider>
}