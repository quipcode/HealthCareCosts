import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { Control, Form, Errors } from 'react-redux-form';
import {  Button, Label, Col, Row} from 'reactstrap'
import {postFeedback} from '../redux/actions/ActionCreators'

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function SubmissionForm(props){
        

        let operations = [];
        props.hcpcsoperations.forEach(({ value, label }) => operations.push({ value, label }));

        let operationsSet = [...new Set(operations.map(moment => moment.label))];

        let operationsList = operationsSet.sort()
            .map((label, index) => <option key={index}>{label}</option>);

        let states = [];
        props.states.forEach(function({value, label}){
            if(label != "Nation"){
                states.push({ value, label })
            }
        })
        // props.states.forEach(({ value, label }) =>
        //     if(label != "Nation"){
                
        //     }
        //  );
        
        let statesSet = [...new Set(states.map(moment => moment.label))];
        
       console.log(props)
        
        let statesList = statesSet.sort()
            .map((label, index) => <option key={index}>{label}</option>);  
     
        // console.log(operations)
        // console.log(operationsSet)

        // console.log(operationsList)
        return (
          
            <div className="container">
            <div className="row row-content">
                        <div className="col-12">
                            <h2>Send us your Feedback</h2>
                            <hr />
                        </div>
                        <div className="col-md">
                        <Form model="feedbackForm"  >   
                            {/* <Form model="feedbackForm"  onSubmit={values => this.handleSubmit(values)}>    */}
                                
                                
                                {/* <Row className="form-group">
                                    <Label htmlFor="medicalOperations" md={2}>Medical Operations</Label>
                                    <Col md={10}>
                                        <Control.select model=".medicalOperations" name="medicalOperations"
                                            className="form-control" validators={{
                                                required
                                            }}>
                                
                                           {operationsList}

                                        </Control.select>
                                        <Errors
                                            className="text-danger"
                                            model=".medicalOperations"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required'
                                            }}
                                        />
                                    </Col>
                                </Row> */}
                                <Row className="form-group">
                                    <Label htmlFor="medicalOperation" md={2}>Medical Operation</Label>
                                    <Col md={10}>
                                        <Control.select model=".medicalOperation" name="medicalOperation"
                                            className="form-control" validators={{
                                                required
                                            }}>
                                           {operationsList}
                                        </Control.select>
                                        <Errors
                                            className="text-danger"
                                            model=".medicalOperation"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastName" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastName"
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
                                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                    <Col md={10}>
                                        <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(10),
                                                maxLength: maxLength(15),
                                                isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".phoneNum"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 10 numbers',
                                                maxLength: 'Must be 15 numbers or less',
                                                isNumber: 'Must be a number'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="state" md={2}>State</Label>
                                    <Col md={10}>
                                        <Control.select model=".state" name="state"
                                            className="form-control" validators={{
                                                required
                                            }}>
                                           {statesList}
                                        </Control.select>
                                        <Errors
                                            className="text-danger"
                                            model=".medicalOperations"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required'
                                            }}
                                        />
                                    </Col>
                                </Row>
              
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }}
                                        />
                                    </Col>
                                </Row>
                         
                                <Row className="form-group">
                                    <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".feedback" id="feedback" name="feedback"
                                            rows="12"
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
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
                    </div>
          );
        
      
    
}



  export default SubmissionForm; 