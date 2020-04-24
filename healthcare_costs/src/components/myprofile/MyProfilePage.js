import React, { Component } from 'react'
import { Control, Form} from 'react-redux-form';
import { Col, Row} from 'reactstrap'


const fieldStyling = {
    "marginTop": "5px"
}
const updateBtnStyling = {
    "position" : "relative",
    "marginBottom": "5px",
    "color": "white",
    "backgroundColor": "#016DB8"
}         

class MyProfilePage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: '',
            username: '',
            email: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zipcode: '' ,
             
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   
    
    handleSubmit(event) {
        
        this.props.patchUserProfile(event, this.props.userId);
    }

render(){
    let firstNameControl
    let lastNameControl
    let emailControl
    let usernameControl
    let address1Control
    let address2Control
    let cityControl
    let stateControl
    let zipcodeControl


    this.props.myprofile.firstname ? firstNameControl = <Control.text className="form-control" placeholder="First Name"   model=".firstName" id="firstName"  defaultValue={this.props.myprofile.firstname}  /> : firstNameControl = <Control.text   model=".firstName" id="firstName" className="form-control" placeholder="First Name"  />

    this.props.myprofile.lastname ? lastNameControl = <Control.text className="form-control" placeholder="Last Name" model=".lastName" defaultValue={this.props.myprofile.lastname} /> : lastNameControl = <Control.text className="form-control" placeholder="Last Name" model=".lastName" />
    
    this.props.myprofile.email ? emailControl = <Control.text disabled={{ valid: true }} className="form-control" placeholder="Email" model="myuserprofile.email"  defaultValue={this.props.myprofile.email} /> : emailControl =  <Control.text disabled={{ valid: true }} className="form-control" placeholder="Email" model="myuserprofile.email" />
    
    this.props.myprofile.username ? usernameControl = <Control.text disabled={{ valid: true }} className="form-control"  placeholder="Username" model="myuserprofile.username" defaultValue={this.props.myprofile.username} /> : usernameControl = <Control.text disabled={{ valid: true }}  className="form-control" placeholder="Username" model="myuserprofile.username" />

    
    this.props.myprofile.address1 ? address1Control = <Control.text className="form-control"  placeholder="Address 1" model="myuserprofile.address1" defaultValue={this.props.myprofile.address1} /> : address1Control = <Control.text className="form-control" placeholder="Address 1" model="myuserprofile.address1" />

    this.props.myprofile.address2 ? address2Control = <Control.text className="form-control"  placeholder="Address 2" model="myuserprofile.address2" defaultValue={this.props.myprofile.address2} /> : address2Control = <Control.text className="form-control" placeholder="Address 2" model="myuserprofile.address2" />

    this.props.myprofile.city ? cityControl = <Control.text className="form-control"  placeholder="City" model="myuserprofile.city" defaultValue={this.props.myprofile.city} /> : cityControl = <Control.text className="form-control" placeholder="City" model="myuserprofile.city" />
   
 
    this.props.myprofile.state 
    ? 
    stateControl = 
    <Control.select  className="form-control" placeholder="States"  model="myuserprofile.state" defaultValue={this.props.myprofile.state} selected> 
     {this.props.states.map(state =>  <option value={state.label}>{state.label}</option> )}
    <option value={this.props.myprofile.state } selected>{this.props.myprofile.state }</option> 
    </Control.select>
    : 
    stateControl = 
    <Control.select  className="form-control" placeholder="States"  model="myuserprofile.state"> 
    <option>States</option>
    {this.props.states.map(state =>  <option value={state.label}>{state.label}</option> )}
    </Control.select>
    
    this.props.myprofile.zipcode ? zipcodeControl = <Control.text className="form-control"  placeholder="Username" model="myuserprofile.zipcode" defaultValue={this.props.myprofile.zipcode} /> : zipcodeControl = <Control.text className="form-control" placeholder="Zipcode" model="myuserprofile.zipcode" />
    
    return(
        <div className="container selection-grid ">
            <div className="row row-content">
                    <div className="col-12">
                        <h2>Welcome Back</h2>
                        <hr />
                        <Form model="myuserprofile" onSubmit={values => this.handleSubmit(values)} >  
                                
                            <Row className="form-group">
                                <Col md={6} style={fieldStyling}>
                                    {firstNameControl}                          
                                </Col>
                                <Col md={6} style={fieldStyling}>
                                    {lastNameControl}
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={6} style={fieldStyling}>
                                    {usernameControl}
                                </Col>
                                <Col md={6} style={fieldStyling}>
                                    {emailControl}
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={6} style={fieldStyling}>
                                {address1Control}
                                </Col>
                                <Col md={6} style={fieldStyling}>
                                    {address2Control}
                                </Col>
                                <Col md={5} style={fieldStyling}>
                                    {cityControl}
                                </Col>
                                <Col md={3} style={fieldStyling}>
                                    {stateControl}
                                </Col>
                                <Col md={4} style={fieldStyling}>
                                        {zipcodeControl}
                                </Col>
                        
                            </Row>

                            <button type="submit" className="btn 
                                float-right" style={updateBtnStyling}  >
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