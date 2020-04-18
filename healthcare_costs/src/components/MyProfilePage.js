import React, { Component } from 'react'
import { Control, Form, Errors, Field   } from 'react-redux-form';
import {  Button, Label, Col, Row} from 'reactstrap'

const fieldStyling = {
    "marginTop": "5px"
}
const updateBtnStyling = {
    "position" : "relative",
    // "padding-bottom": "5px",
    "marginBottom": "5px",
    color: "white",
    "backgroundColor": "#016DB8"
}         

class MyProfilePage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: '',
            username: '',
            phoneNum: '',
            email: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zipcode: '' ,
             
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.getmeprofile = this.getmeprofile(this)
    }

   
    
    handleSubmit(event) {
        // console.log(this.state, event)
        console.log(this.props, event)
        // this.props.patchUserProfile(event);
        
    //   alert('A name was submitted: ' + this.state);
    //   event.preventDefault();
    }
   
    getmeprofile(event){
        this.props.getUserProfile(this.props.userId)
        // console.log(this.props.userId)
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
                                    <Col md={6} style={fieldStyling}>
                                    {/* <label for="inputEmail4">Email</label> */}
                                        <Control.text   model=".firstName" id="firstName" className="form-control" placeholder="First Name"  onChange={this.happy} />
                                    </Col>
                                    
                                    <Col md={6} style={fieldStyling}>
                                    {/* <label for="inputEmail4">Email</label> */}
                                    <Control.text className="form-control" placeholder="Last Name" model=".lastName" />
                                    </Col>
                                    
                                </Row>
                                <Row className="form-group">
                                    <Col md={6} style={fieldStyling}>
                                        
                                        <Control.text className="form-control" disabled={{ valid: true }} placeholder="Username" model="myuserprofile.username" />
                                    </Col>
                                    
                                    <Col md={6} style={fieldStyling}>
                                    
                                        <Control.text disabled={{ valid: true }}className="form-control" placeholder="Email" model="myuserprofile.email" />
                                    </Col>
                                    
                                </Row>
                                <Row className="form-group">
                                    <Col md={6} style={fieldStyling}>
                                    <Control.text className="form-control" placeholder="Address 1" model="myuserprofile.address1" />
                                    </Col>
                                    <Col md={6} style={fieldStyling}>
                                    <Control.text className="form-control" placeholder="Address 2" model="myuserprofile.address2" />
                                    </Col>
                                    <Col md={5} style={fieldStyling}>
                                        <Control.text className="form-control" placeholder="City" model="myuserprofile.city" />
                                    </Col>
                                    <Col md={3} style={fieldStyling}>
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
                                    <Col md={4} style={fieldStyling}>
                                         <Control.text className="form-control" placeholder="Zipcode" model="myuserprofile.zipcode" />
                                    </Col>
                                </Row>
                                {/* <Row className="form-group">
                                   
                                </Row>
                                <Row className="form-group">
                                   
                                </Row> */}
                                
                                <button type="submit" className="btn 
                                 float-right" style={updateBtnStyling}>
                                    Update
                                </button>
                               
                        </Form>
                    </div>
            </div>
                                <button onClick={() => this.getmeprofile()}> trigger profile getter </button>
        </div>
        
    )
}
}
export default MyProfilePage