import React, { Component } from 'react'
import { Control, Form, Errors, Field   } from 'react-redux-form';
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
        <div className="container app selection-grid ">
            <div className="row row-content">
                    <div className="col-12">
                        <h2>Send us your Feedback</h2>
                        <hr />
                        
                        <Form model="myuserprofile">  
                            <Row className="form-group">
                                    <Col>
                                        
                                        <Control.text className="form-control" placeholder="First Name" model="myuserprofile.firstName" />
                                    </Col>
                                    
                                    <Col>
                                    
                                    <Control.text className="form-control" placeholder="Last Name" model="myuserprofile.lastName" />
                                    </Col>
                                    
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        
                                        <Control.text className="form-control" placeholder="Username" model="myuserprofile.username" />
                                    </Col>
                                    
                                    <Col>
                                    
                                        <Control.text className="form-control" placeholder="Email" model="myuserprofile.email" />
                                    </Col>
                                    
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                    <Control.text className="form-control" placeholder="Address 1" model="myuserprofile.address1" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                    <Control.text className="form-control" placeholder="Address 2" model="myuserprofile.address2" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col>
                                        <Control.text className="form-control" placeholder="City" model="myuserprofile.city" />
                                    </Col>
                                    <Col>
                                    <Field model="user.favoriteColors">
                                        <select className="form-control">
                                            {/* {showWhite && <option value="white">white</option>} */}
                                            <option value="red">red</option>
                                            <option value="green">green</option>
                                            <option value="blue">blue</option>
                                        </select>
                                    </Field>
                                        <Control.text className="form-control" placeholder="State" model="myuserprofile.state" />
                                    </Col>
                                    <Col>
                                         <Control.text className="form-control" placeholder="Zipcode" model="myuserprofile.zipcode" />
                                    </Col>
                                </Row>
                                <Button>Update</Button>
                        </Form>
                    </div>
            </div>
         
        </div>
        
    )
}
}
export default MyProfilePage