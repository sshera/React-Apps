import React from "react";
import './Header.css';
import SearchIcon from './@mui/icons-material/Search';
import HomeIcon from './@mui/icons-material/Home';
import SupervisorAccountIcon from './@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from './@mui/icons-material/BusinessCenter';
import ChatIcon from './@mui/icons-material/Chat';
import NotificationsIcon from './@mui/icons-material/Notifications';
import linkedinicon from './linkedin.png';
import HeaderOption from "./HeaderOption";
import catpic from './catpic.jpg';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
    const dispatch = useDispatch();

    const logOutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src={linkedinicon} alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} onClick={logOutOfApp}/>
            </div>
        </div>
    )
}

export default Header;
