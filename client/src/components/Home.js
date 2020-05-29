import React, { Component } from 'react';
import Select from 'react-select';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            operation: null,
            state: null,
            selectedOption: null
        }
    }

    handleOperationChange = operation => {
        this.setState({operation})    
    }
    handleStateChange = state => {
        this.setState({state})     
    }
    
    render(){
        return(            
            <div className="app">
                <div className="container">
                    <h1>Welcome to the Health Care Cost applications</h1>
                    <p>This app was inspired by the good works of the folks at <a href="https://clearhealthcosts.com">ClearHealthCosts</a></p>
                    <p>The purpose of this app is to allow users to view and upload medical operation costs</p>
                    <p>The Proof of Concept(POC) part of the application is sample data of 25 medical procedures in the year 2012 procured from the <a href="https://www.cms.gov/Research-Statistics-Data-and-Systems/Research/HealthCareConInit/Physician">Center for Medicare <span>&#38;</span>  Medicaid Services(CMS)</a></p>
                 
                </div>
            </div>
        )
    }
}
export default Home