import contacts from "../data/contactsData";

export function getAllContacts(){
    return contacts
}

export function getContactById(idContact){
    for (const contact of contacts) {
        if(Number(contact.id) === Number(idContact)){
            return contact
        }
    }
}