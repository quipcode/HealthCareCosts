import React, { Component } from 'react';
import Select from 'react-select';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom'

class POCSearch extends Component{
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
                <div className="container selection-grid ">
                    <h1>Select an operation and/or state</h1>
                    <div className="row selection-row">
                        <div className="col-md-8 selectionDropdown">
                            <Select options={this.props.props.hcpcsoperations.hcpcsoperations} onChange={this.handleOperationChange} placeholder="Operation"   />
                        </div>
                        <div className="col-md-4 selectionDropdown" >
                            <Select options={this.props.props.usstates.USStates} onChange={this.handleStateChange} placeholder="States" />
                        </div>
                    </div>
                    <Link to={{
                        pathname: '/healthcarecosts',
                        operationstateProps: {
                            operation: this.state.operation,
                            state: this.state.state
                        }
                    }}>
                    <Button id="searchBtn" >Search</Button>
                    </Link>
                 
                </div>
            </div>
        )
    }
}
export default POCSearch