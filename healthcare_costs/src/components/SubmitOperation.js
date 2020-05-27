import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { Control, Form, Errors, actions, component } from 'react-redux-form';
import {  Button, Label, Col, Row} from 'reactstrap'
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import FormSubmitOperation from './Form/FormSubmitOperation'
import DropdownList from 'react-widgets/lib/DropdownList'

// import {postFeedback} from '../redux/actions/ActionCreators'

const required = val => val && val.length;
// const maxLength = len => val => !val || (val.length <= len);
// const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
// const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class SubmissionForm extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            operationsList: [],
            statesList: []
        }
      

        let operations = [];
        this.props.hcpcsoperations.forEach(({ value, label }) => operations.push({ value, label }));
        let operationsSet = [...new Set(operations.map(moment => moment.label))];
        this.state.operationsList = operationsSet.sort()
            .map((label, index) => <option key={index}>{label}</option>);
        
        let states = [];
        this.props.states.forEach(function({value, label}){
            if(label !== "Nation"){
                states.push({ value, label })
            }
        })
        let statesSet = [...new Set(states.map(moment => moment.label))];
        this.state.statesList = statesSet.sort().map((label, index) => <option key={index}>{label}</option>);  
       
    }

     
    render(){
        return (
            <div className="container">
                <div >
                    <h2>Submit an operation</h2>
                    <hr />
                </div>
                <FormSubmitOperation onSubmit={val => console.log("hello there", val, this.state.statesList )} userid={this.props.user.id} states={this.state.statesList} medops={this.state.operationsList} flame={["pink", "12"]}/>
            <div className="row row-content">                    
                <div className="col-12">            
                    <hr />
                    <span>Don't see the operation you had listed please fill out our suggestion form</span>
                    <Button type="submit" className="float-right" color="info">
                        Suggest Operation
                    </Button>
                </div>
            </div>   
            </div>
          );
        }
    
}

const mapDispatchToProps = dispatch => ({
    // ...other methods,
    dispatch                // ← Add this
 })

export default connect(null, mapDispatchToProps)(SubmissionForm)

//   export default SubmissionForm; 