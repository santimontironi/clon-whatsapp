import { MdMessage } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { IoEllipseOutline } from "react-icons/io5";
import { RiBroadcastLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import myPhoto from "../../static/img/myPhoto.png";
import './SideNav.css'

const SideNav = () => {
  return (
    <nav className="nav">
        <div className="nav-top">
            <ul>
                <li className="nav-top-active"> {<MdMessage size={25} color="#fff"/>}  </li>
                <li> {<IoEllipseOutline size={25} color="#848484"/>}  </li>
                <li> {<RiBroadcastLine size={25} color="#848484"/>}  </li>
                <li> {<PiUsersThree size={25} color="#848484"/>}  </li>
            </ul>
        </div>

        <div className="nav-bottom">
            <ul>
                <li>{<CiSettings size={25} color="#848484"/>}</li>
                <li><img src={myPhoto} alt="myPhoto" /></li>
            </ul>
        </div>
    </nav>
  )
}

export default SideNav