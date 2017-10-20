import React from 'react';

export default function Forecast(props)
{
    return(<div className="col-sm-2 col-md-2 col-lg-2">
        
        <div className="col-sm-5 col-md-5 col-lg-5 bell">
            <img src='../../images/notification.png'/>
        </div>
        <div className="col-sm-5 col-md-5 col-lg-5 forecast-date">
            <div className="forecaset-header">
                Forecast
            </div>
            <div className="date-forecast">
        
                14February
            </div>
        </div>
           
            </div>
    )
}