import React from 'react';
import SessionWidget from './SessionWidget';
import Users from './Users';

export default function SessionsContainer(props)
{
    return(<div className="col-sm-9 col-md-9 col-lg-9 session">
        <div className="session-top">
        <div className="col-sm-6 col-md-6 col-lg-6 ">
            <span className="session-header">Sessions</span>
            <span className="export">Export</span>
        </div>
      
        <div className="col-sm-6 col-md-6 col-lg-6">
            <span className="cards-table">
                <span>Cards</span>
                <span>Table</span>
            </span>
        </div>
        </div>
        
        <div className="col-sm-4 col-md-4 col-lg-4 session-widgets">
        <SessionWidget/>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-4 session-widgets">
        <SessionWidget/>
    </div>
    
    <div className=" col-sm-12 col-md-12 col-lg-12 date-bar">
            14th Tuesday
    </div>
    <Users/>
            
    
</div>
    )
}