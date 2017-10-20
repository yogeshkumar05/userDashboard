import React from 'react';

export default function SaerchBar(props)
{
    return(<div className="col-sm-10 col-md-10 col-lg-10 search-bar">
                <img className="search-icon" src='../../images/search.png'/>
                <input type="search" className="search-input" value="Find a user, team, meeting"/>
        </div>
    )
}