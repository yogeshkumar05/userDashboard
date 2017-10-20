

import React from 'react';

export default function User(props)
{
    return(<div className="col-sm-3 col-md-3 col-lg-3 user">
        <div className="col-sm-3 col-md-3 col-lg-3">
        <img className="user-avatar" src='../../images/user.png'/>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-8">
            <div className="user-name">Samuel Spencer</div>
            <div className="user-email">samuel@abc.com</div>
            <div className="user-role">Creative director</div>
        </div>
        <div className="user-activity">
            <div className="col-sm-6 col-md-6 col-lg-6 user-invites">
                <div>Invites</div>
                <div>03</div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 user-pending">
                <div>Pending</div>
                <div>02</div>
            </div>
            <div>
                Overall Activity
                <img className="user-avatar" src='../../images/activity-graph.png'/>
            </div>
        </div>
    </div>
    )
}
