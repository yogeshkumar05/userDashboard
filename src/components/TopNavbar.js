import React from 'react';
import SearchBar from './SearchBar';

export default function TopNavBar(props)
{
    return(<div className="top-nav">
        <SearchBar/>
        <div className="col-sm-1 col-md-1 col-lg-1">
       
        <button className="invite-btn"> <img className="invite-icon" src='../../images/invite.png'/>Invite</button>
        
        </div>
        <div className="col-sm-1 col-md-1 col-lg-1">
        <img className="top-user-avatar" src='../../images/user.png'/>
        </div>
        
        
           </div>
    )
}