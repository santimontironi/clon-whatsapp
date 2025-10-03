import { createContext, useEffect } from "react";3
import { useState } from "react";
import { getAllContacts } from "../services/contactService";

export const ContactListContext = createContext()

export const ContactListProvider = ({children}) => {

    const[contactList,setContactList] = useState([])
    const[resultsContacts,setResultsContacts] = useState([])
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

    function onSearchContact(searchTerm){

        if(searchTerm.trim().length === 0){
            setResultsContacts([])
            return
        }

        const filteredContacts = contactList.filter(contact => 
            contact.name.toLowerCase().trim().includes(searchTerm.toLowerCase())
        )
        setResultsContacts(filteredContacts)
    }

    return(
        <ContactListContext.Provider value={{contactList,loading,onSearchContact,resultsContacts}}>
            {children}
        </ContactListContext.Provider>
    )
}