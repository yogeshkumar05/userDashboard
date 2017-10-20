import React, { Component } from 'react';
import { connect } from "react-redux";
import TopNavbar from './TopNavbar';
import MainNavbar from './MainNavbar';
import SessionsContainer from './SessionsContainer';
import Forecast from './Forecast';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
      
    }

   
    render() {
        
        return (
            <div className="row">
                <div className="col-sm-1 col-md-1 col-lg-1">
                    <MainNavbar updateLogin={this.props.updateLogin}/>
                
                    <div className="verticalLine">
                    </div>
                </div>
            <div className="col-sm-11 col-md-11 col-lg-11">
                <TopNavbar/>
                <hr/>
                <SessionsContainer/>
                <Forecast/>
                
            
            </div>
            
            
               
            </div>
        )
    }
}
export default connect(state => (
    {
        planets: state.dashboardReducer.planets
    }
))(AppContainer);
