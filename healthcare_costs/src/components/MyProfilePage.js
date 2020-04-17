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
            zipcode: '' ,
            fieldStyling: {
                "margin-top": "5px"
            },
            updateBtnStyling: {
                "position" : "relative",
                // "padding-bottom": "5px",
                "margin-bottom": "5px",
                color: "white",
                "background-color": "#016DB8"
                


            }          
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
        <div className="container selection-grid ">
            <div className="row row-content">
                    <div className="col-12">
                        <h2>Welcome Back</h2>
                        <hr />
                        
                        <Form model="myuserprofile" onSubmit={values => this.handleSubmit(values)} >  
                            <Row className="form-group">
                                    <Col md={6} style={this.state.fieldStyling}>
                                    {/* <label for="inputEmail4">Email</label> */}
                                        <Control.text className="form-control" placeholder="First Name" model="myuserprofile.firstName" />
                                    </Col>
                                    
                                    <Col md={6} style={this.state.fieldStyling}>
                                    {/* <label for="inputEmail4">Email</label> */}
                                    <Control.text className="form-control" placeholder="Last Name" model="myuserprofile.lastName" />
                                    </Col>
                                    
                                </Row>
                                <Row className="form-group">
                                    <Col md={6} style={this.state.fieldStyling}>
                                        
                                        <Control.text className="form-control" placeholder="Username" model="myuserprofile.username" />
                                    </Col>
                                    
                                    <Col md={6} style={this.state.fieldStyling}>
                                    
                                        <Control.text className="form-control" placeholder="Email" model="myuserprofile.email" />
                                    </Col>
                                    
                                </Row>
                                <Row className="form-group">
                                    <Col md={6} style={this.state.fieldStyling}>
                                    <Control.text className="form-control" placeholder="Address 1" model="myuserprofile.address1" />
                                    </Col>
                                    <Col md={6} style={this.state.fieldStyling}>
                                    <Control.text className="form-control" placeholder="Address 2" model="myuserprofile.address2" />
                                    </Col>
                                    <Col md={5} style={this.state.fieldStyling}>
                                        <Control.text className="form-control" placeholder="City" model="myuserprofile.city" />
                                    </Col>
                                    <Col md={3} style={this.state.fieldStyling}>
                                    <Field model="user.favoriteColors">
                                        <select className="form-control">
                                            {/* {showWhite && <option value="white">white</option>} */}
                                            <option value="red">red</option>
                                            <option value="green">green</option>
                                            <option value="blue">blue</option>
                                        </select>
                                    </Field>
                                        {/* <Control.text className="form-control" placeholder="State" model="myuserprofile.state" /> */}
                                    </Col>
                                    <Col md={4} style={this.state.fieldStyling}>
                                         <Control.text className="form-control" placeholder="Zipcode" model="myuserprofile.zipcode" />
                                    </Col>
                                </Row>
                                {/* <Row className="form-group">
                                   
                                </Row>
                                <Row className="form-group">
                                   
                                </Row> */}
                                
                                <button  className="btn 
                                 float-right" style={this.state.updateBtnStyling}>
                                    Update
                                </button>
                               
                        </Form>
                    </div>
            </div>
         
        </div>
        
    )
}
}
export default MyProfilePage