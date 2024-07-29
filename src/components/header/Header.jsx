//React
import propTypes from 'prop-types'
// Styles
import './header.css'
// Icons
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
// Images
import profileImg from '../../assets/images/profile_images/profile_img_2.webp'

export function Header({ noti }) {

    return (
        <header className='main-header'>
            <div className="input-group">
                <i><IoIosSearch /></i>
                <input placeholder='Search for various stocks' type="search" name="search" id="search" />
            </div>
            <nav className='nav-header'>
                <ul>
                    <li><i><IoMailOutline /></i></li>
                    <li><i className={noti ? 'notification' : null}><IoNotificationsOutline /></i></li>
                </ul>
                <div className="profile">
                    <figure>
                        <img src={profileImg} alt="Profile Image" />
                        <figcaption>Peter Parker <IoIosArrowDown /></figcaption>
                    </figure>
                </div>
            </nav>
        </header>
    )

}
Header.propTypes = {
    noti: propTypes.bool
}