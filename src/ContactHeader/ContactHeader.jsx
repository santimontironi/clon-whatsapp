import { CiVideoOn } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router";
import { useState } from "react";
import ContactData from "../Components/ContactData/ContactData"
import './ContactHeader.css'

const ContactHeader = ({ photo, name, last_connection, number, state, is_connected }) => {

    const [open, setOpen] = useState(false)

    const contact = {
        photo: photo,
        name: name,
        last_connection: last_connection,
        is_connected: is_connected,
        state: state,
        number: number
    }

    return (
        <header className="contactHeader">
            <div className="contactHeader-content">
                <div className="contactHeader-content-userData">
                    <Link to="/" className="back-arrow">
                        <IoArrowBackOutline size={22} color="#fff" />
                    </Link>
                    <img src={photo} alt="profile_photo" />
                    <div className='contactHeader-content-userData-data' onClick={() => { setOpen(!open) }}>
                        <span className="contactHeader-content-userData-data-name">{name}</span>
                        {is_connected ? (
                            <span className='contactHeader-content-userData-data-is_connected'>En linea</span>
                        ) : (
                            <span className='contactHeader-content-userData-data-last_connection'>{last_connection}</span>
                        )}
                    </div>
                </div>
                <div className="contactHeader-content-functions">
                    <CiVideoOn size={25} color="#fff" />
                    <IoSearchOutline size={25} color="#fff" />
                    <SlOptionsVertical size={25} color="#fff" />
                </div>
            </div>

            {open && <ContactData contact={contact} />}
        </header>


    )
}

export default ContactHeader