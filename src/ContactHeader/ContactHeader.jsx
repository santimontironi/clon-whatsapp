import { CiVideoOn } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { IoSearchOutline } from "react-icons/io5";
import './ContactHeader.css'

const ContactHeader = ({photo,name,last_connection,is_connected}) => {
  return (
    <header className="contactHeader">
        <div className="contactHeader-content">
            <div className="contactHeader-content-userData">
                <img src={photo} alt="profile_photo" />
                <div className='contactHeader-content-userData-data'>
                    <span className='contactHeader-content-userData-data-name'>{name}</span>
                    {is_connected ? (
                        <span className='contactHeader-content-userData-data-is_connected'>En linea</span>
                    ) : (
                        <span className='contactHeader-content-userData-data-last_connection'>{last_connection}</span>
                    )}
                </div>
            </div>
            <div className="contactHeader-content-functions">
                <CiVideoOn size={25} color="#fff"/>
                <IoSearchOutline size={25} color="#fff"/>
                <SlOptionsVertical size={25} color="#fff"/>
            </div>
        </div>
    </header>
  )
}

export default ContactHeader