import React from 'react';
import { logoutUser } from "./../action-creators/dashboard_actions";

export default function MainNavbar(props)
{
    return(<div className="main-nav">
        <div className="nav-icon-logo"><img src='../../images/logo.png'/></div>
        <div className="nav-icon"><img src='../../images/dashboard.png'/></div>
        <div className="nav-icon"><img src='../../images/user-icon.png'/></div>
        <div className="nav-icon"><img src='../../images/meeting.png'/></div>
        <div className="nav-icon"><img src='../../images/file.png'/></div>
        <div className="nav-icon"><img src='../../images/chat.png'/></div>
        <div className="nav-icon"><img src='../../images/settings.png'/></div>
        <div className="nav-icon-logout" onClick={()=>{props.updateLogin(false); logoutUser()}}><img src='../../images/logout.png'/></div>
      </div>
    )
}