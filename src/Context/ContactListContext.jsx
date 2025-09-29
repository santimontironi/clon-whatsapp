import { createContext, useEffect } from "react";3
import { useState } from "react";
import { getAllContacts } from "../services/contactService";

export const ContactListContext = createContext()

export const ContactListProvider = ({children}) => {

    const[contactList,setContactList] = useState([])
    const[loading,setLoading] = useState(false)

    const allContacts = getAllContacts()

    useEffect(() => {
        function loadContactList(){
            setLoading(true)
            setTimeout(() => {
                setContactList(allContacts)
                setLoading(false)
            },1000)
        }
        loadContactList()
    },[])

    return(
        <ContactListContext.Provider value={{contactList,loading}}>
            {children}
        </ContactListContext.Provider>
    )
}