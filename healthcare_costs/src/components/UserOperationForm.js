import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { Control, Form, Errors, actions, component } from 'react-redux-form';
import {  Button, Label, Col, Row} from 'reactstrap'
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import SimpleForm from './SimpleForm'
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
        this.inputEl = React.createRef();
        this.state = {
            operationsList: [],
            statesList: []
        }
        this.onClick = event => {
            const { onChange } = this.props;
        
            const customEvent = new Event('change');
        
            // set value on the input element and dispatch custom event
            console.log(this.inputEl.current.value)
            // this.inputEl.current.value = event.currentTarget.dataset.rating;
            // this.inputEl.current.dispatchEvent(customEvent);
        
            // // immediately dispatch onChange
            // onChange && onChange(customEvent);
          }
        // this.props.change('UserId', this.props.user.id)
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
// function SubmissionForm(props){
        
    // function handleEmailChange(e) {
    //     this.setState({email: e.target.value});
    //  }
    //  function handlePasswordChange(e) {
    //     this.setState({password: e.target.value});
    //  }

        // let operations = [];
        

    //     let states = [];
    //     props.states.forEach(function({value, label}){
    //         if(label !== "Nation"){
    //             states.push({ value, label })
    //         }
    //     })

        
    //     let statesSet = [...new Set(states.map(moment => moment.label))];
        
    //    console.log(props.user.id)
    //     function formSubmission(val){
    //         console.log(val)
            
    //     }
        
    //     let statesList = statesSet.sort()
    //         .map((label, index) => <option key={index}>{label}</option>);  
     
    render(){
        return (
          
            <div className="container">
            <div className="row row-content">
                        <div className="col-12">
                            <h2>Send us your Feedback</h2>
                            <hr />
                        </div>
                        <div className="col-md">
                        {/* onSubmit={ values => {
                            // values["UserId"] = props.user.id
                            this.props.dispatch(actions.change("useroperation", "UserId",this.props.user.id)) 
                            console.log(values)
                            
                            
                            }} */}
                             <DropdownList
                                
                                data={['orange', 'red', 'blue', 'purple']}
                                
                                />
                        <Form model="useroperation"  onSubmit={val => console.log(val)} >   
                            <Row className="form-group">
                                {/* <Label htmlFor="UserId" md={2}>User Id</Label> */}
                                <Col md={10}>
                                {/*  readOnly type="hidden" value={this.props.user.id}*/}
                                    <Control.text  model=".UserId" id="UserId" name="UserId" 
                                        // placeholder="UserId"
                                        className="form-control"
                                        ref={ this.inputEl }
                                        value={this.props.user.id}
                                        // component={({ val }) => onChange(val)}
                                        // ref={(input) => { this.state.actionInput = input }}
                                        // validators={{
                                        //     required,
                                        //     isNumber,
                                        // }}
                                    />
                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="Operation" md={2}>Medical Operation</Label>
                                <Col md={10}>
                                    <Control.select model=".Operation" name="Operation"
                                        className="form-control" validators={{
                                            required
                                        }} >
                                        {this.state.operationsList}
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".Operation"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="MedPayment" md={2}>Payment Required</Label>
                                <Col md={10}>
                                    <Control.text model=".MedPayment" id="MedPayment" name="MedPayment"
                                        placeholder="Med Payment"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".MedPayment"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="PaidAmnt" md={2}>Paid Amount</Label>
                                <Col md={10}>
                                    <Control.text model=".PaidAmnt" id="PaidAmnt" name="PaidAmnt"
                                        placeholder="Paid Amount"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".PaidAmnt"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="CoverMedicarePayment" md={2}>Cover Medicare Payment</Label>
                                <Col md={10}>
                                    <Control.text model=".CoverMedicarePayment" id="CoverMedicarePayment" name="CoverMedicarePayment"
                                        placeholder="Cover Medicare Payment"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".CoverMedicarePayment"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="State" md={2}>State</Label>
                                <Col md={10}>
                                    <Control.select model=".State" name="State"
                                        className="form-control" validators={{
                                            required
                                        }}>
                                        {this.state.statesList}
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".State"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Submit Operation
                                    </Button>
                                </Col>
                            </Row>
                            </Form>
                            
                      
                        </div>
                        <div className="col-12">
                            
                            <hr />
                            <p>Don't see the operation you had listed please fill out our suggestion form</p>
                        </div>
                    </div>
                    <SimpleForm onSubmit={val => console.log("hello there", val, this.state.statesList )} userid={this.props.user.id} states={this.state.statesList} flame={["pink", "12"]}/>
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