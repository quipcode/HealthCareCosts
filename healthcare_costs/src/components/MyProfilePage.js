import React, { Component } from 'react'
import { Control, Form, Errors,   } from 'react-redux-form';
import {  Button, Label, Col, Row} from 'reactstrap'

class MyProfilePage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            phoneNum: '',
            email: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zipcode: ''            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
render(){
    return(
        <div className="container">
        <div className="row row-content">
                    <div className="col-12">
                        <h2>Send us your Feedback</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <Form model="myuserprofile">
                            <Row className="form-group">
                                <Col>
                                    
                                    <Control.text className="form-control" placeholder="First Name" model="myuserprofile.firstName" />
                                </Col>
                                
                                <Col>
                                
                                <Control.text className="form-control" placeholder="Last Name" model="myuserprofile.lastName" />
                                </Col>
                                
                            </Row>

                            <div className="field">
                            
                            </div>

                            <button type="submit">
                            Submit
                            </button>
                            <Row className="form-group">
                                
                                <Col md={10}>
                                    {/* <Label htmlFor="firstName" md={1}>First Name</Label> */}
                                    <Control.text inline model=".firstName" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                        // validators={{
                                        //     required,
                                        //     minLength: minLength(2),
                                        //     maxLength: maxLength(15)
                                        // }}
                                    />
                                    
                                    {/* <Label htmlFor="firstName" md={1}>Last Name</Label> */}
                                    <Control.text inline model=".lastName" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        className="form-control"
                                        // validators={{
                                        //     required,
                                        //     minLength: minLength(2),
                                        //     maxLength: maxLength(15)
                                        // }}
                                    />
                                </Col>
                                
                                <Col md={10}>
                                    
                                </Col>
                            </Row>
                        </Form>
                    </div>
            </div>
        </div>
        
    )
}
}
export default MyProfilePage