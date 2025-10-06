import { createContext, useEffect } from "react"; 3
import { useState } from "react";
import { getAllContacts } from "../services/contactService";

export const ContactListContext = createContext()

export const ContactListProvider = ({ children }) => {

    const [contactList, setContactList] = useState([])
    const [resultsContacts, setResultsContacts] = useState([])
    const [loading, setLoading] = useState(false)

    const allContacts = getAllContacts()

    useEffect(() => {
        function loadContactList() {
            setLoading(true)
            setTimeout(() => {
                setContactList(allContacts)
                setLoading(false)
            }, 1000)
        }
        loadContactList()
    }, [])

    function onSearchContact(searchTerm) {

        if (searchTerm.trim().length === 0) {
            setResultsContacts([])
            return
        }

        const filteredContacts = contactList.filter(contact =>
            contact.name.toLowerCase().trim().includes(searchTerm.toLowerCase())
        )

        setResultsContacts(filteredContacts)
    }

    function addContact(newContact) {
        const newContactObject = {
            id: contactList.length + 1,
            ...newContact,
            last_time_connected: 'Última vez hoy a las 10 hrs',
            is_connected: true,
            profile_photo: 'data:image/png;base64,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',
            messages: []
        }
        setContactList([...contactList, newContactObject])
    }

    return (
        <ContactListContext.Provider value={{ contactList, loading, onSearchContact, resultsContacts, addContact }}>
            {children}
        </ContactListContext.Provider>
    )
}