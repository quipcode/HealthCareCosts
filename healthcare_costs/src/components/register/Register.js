import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { Control, Form, Errors } from 'react-redux-form';
import {  Button, Label, Col, Row} from 'reactstrap'
import {postFeedback} from '../../redux/actions/ActionCreators'

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        
   


       
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        // console.log('Current state is: ' + JSON.stringify(values));
        // alert('Current state is: ' + JSON.stringify(values));
        postFeedback(values);
        this.props.resetFeedbackForm();
    
    }
  
    // handleChange(event) {    this.setState({value: event.target.value});  }
    // handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
    //   event.preventDefault();
    // }
  
    render() {
      return (
        <div className="container">
        <div className="row row-content">
                    <div className="col-12">
                        <h2>Send us your Feedback</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <Form model="feedbackForm"  onSubmit={values => this.handleSubmit(values)}>   
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>Medicare Payment</Label>
                                <Col md={10}>
                                    <Control.text model=".firstName" id="firstName" name="firstName"
                                        placeholder="Medicare Payment"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
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
                                <Col md={{ size: 4, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>By Email</option>
                                        <option>By Phone</option>
                                    </Control.select>
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
                </div>
                </div>

        //   <form>
        //         <TextField
        //   name="firstName"
        //   hintText="First name"
        //   floatingLabelText="First name"
        //   value={this.state.firstName}
        //   onChange={e => this.change(e)}
        //   errorText={this.state.firstNameError}
        //   floatingLabelFixed
        // />
        // <br />
        // <TextField
        //   name="lastName"
        //   hintText="Last Name"
        //   floatingLabelText="Last Name"
        //   value={this.state.lastName}
        //   onChange={e => this.change(e)}
        //   errorText={this.state.lastNameError}
        //   floatingLabelFixed
        // />
        // <br />
        // <TextField
        //   name="username"
        //   hintText="Username"
        //   floatingLabelText="Username"
        //   value={this.state.username}
        //   onChange={e => this.change(e)}
        //   errorText={this.state.usernameError}
        //   floatingLabelFixed
        // />
        // <br />
        // <TextField
        //   name="email"
        //   hintText="Email"
        //   floatingLabelText="Email"
        //   value={this.state.email}
        //   onChange={e => this.change(e)}
        //   errorText={this.state.emailError}
        //   floatingLabelFixed
        // />
        // <br />
        // <TextField
        //   name="password"
        //   hintText="Password"
        //   floatingLabelText="Password"
        //   value={this.state.password}
        //   onChange={e => this.change(e)}
        //   errorText={this.state.passwordError}
        //   type="password"
        //   floatingLabelFixed
        // />
        // <br />
        //       <Button label="Submit" variant="contained" />
        //   </form>
       
      );
    }
  }

  export default Register; 