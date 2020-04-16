import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Control, Form, Errors,   } from 'react-redux-form';
import {  Button, Label, Col, FormGroup} from 'reactstrap'
import axios from 'axios'
// import {loginUser} from ".."
import {loginUser, testbasicfunct} from '../../redux/actions/ActionCreators'
// import styles from "./login.css"

const required = val => val && val.length;
// const maxLength = len => val => !val || (val.length <= len);
// const minLength = len => val => val && (val.length >= len);
// const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Login extends Component{
    constructor(){
        super();
        this.state ={
            email: '',
            password: '',
            errors: {}

        }
       this.handleSubmit = this.handleSubmit.bind(this) 
    }
    
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };
    componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
        // console.log(this.props)
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/home");
        }
    
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    handleSubmit(values) {
     
        testbasicfunct(values)
        this.props.loginUser(values)
        // loginUser(values)
        // this.props.postLogin(values)
        // console.log(values)
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
            {/* <div class="container">
                <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12 mx-auto">
                    <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Sign In</h5>
                        <form class="form-signin">
                            <div class="form-label-group">
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                                <label for="inputEmail">Email address</label>
                              
                            </div>

                            <div class="form-label-group">
                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                                <label for="inputPassword">Password</label>
                            </div>

                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                <label class="custom-control-label" for="customCheck1">Remember password</label>
                            </div>
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                            <hr class="my-4"/>
                            <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                            <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div> */}

            {/* <div className="container">
                <div className="row">
                    <div className="col-xs-8 col-sm-12 col-md-12 col-lg-12">
                        <div className="card card-signin my-5"> */}
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <Form model="loginForm" className="form-signin" onSubmit={values => this.handleSubmit(values)}>
                                {/* <Form model="loginForm" className="form-signin" > */}

                                    <Col>
                                        <FormGroup className="form-group">
                                            <Label>Email</Label>
                                            <Control.text 
                                                model=".email" 
                                                id="email" 
                                                name="email"
                                                placeholder="Email"
                                                className="form-control inputter"
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
                                        </FormGroup>
                                    </Col>

                                    <Col>
                                        <FormGroup className="form-group">
                                            <Label className="labeler" for="examplePassword">Password</Label>
                                            <Control.text 
                                                type="password"
                                                model=".password" 
                                                id="password" 
                                                name="password"
                                                placeholder="password"
                                                className="form-control inputter"
                                                validators={{
                                                    required,
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".password"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                }}
                                            />
                                            
                                        </FormGroup>
                                    </Col>

                                    <Button className="btn btn-lg btn-google btn-block text-uppercase" type="submit" color="primary" onClick={this.onClose} >Submit</Button>
                                </Form>

                                <hr className="my-4"/>
                                
                                <div className="row">
                                    <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                                </div>
                                    <hr className="my-4"/>
                                
                                <div className="row ">                                   
                                    <p id="signUpTxt">Don't have an account? Sign up here!</p>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign up</button>
                                </div>
                            </div>
                         {/* </div>
                    </div>
                </div>    
            </div> */}
                </React.Fragment>
        )
    }
}

Login.propTypes = {
    onClose: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { loginUser }
  )(Login);
  

// export default Login