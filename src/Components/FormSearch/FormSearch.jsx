import { CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import { ContactListContext } from "../../Context/ContactListContext";
import './FormSearch.css'

const FormSearch = () => {

    const { onSearchContact } = useContext(ContactListContext);

    const[searchTerm,setSearchTerm] = useState('')

    const handleSearch = (event) => {
        const value = event.target.value
        setSearchTerm(value)
        onSearchContact(value)
    };

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" name='search' placeholder='Buscar o empezar un nuevo chat' onChange={handleSearch} value={searchTerm} />
            <CiSearch className='icon-search' color='white' fontSize={20} />
        </form>
    )
}

export default FormSearch