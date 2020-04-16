import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Control, Form, Errors,   } from 'react-redux-form';
import {  Button, Label, Col, FormGroup} from 'reactstrap'
import axios from 'axios'
// import {loginUser} from ".."
import {logoutUser} from '../../redux/actions/ActionCreators'



class Logout extends Component{
    constructor(){
        super();
        this.state ={
        
        }
       this.logMeOut = this.logMeOut.bind(this) 
    }
    
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };
    componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
        // console.log(this.props)
        if (!this.props.auth.isAuthenticated) {
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

      logMeOut(values) {
     
        
        this.props.logoutUser()
        // this.props.history.push("/home");
        // history.push("/home")
        // loginUser(values)
        // this.props.postLogin(values)
        // console.log(values)
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <p  > Are you sure you want to logout? </p>
                
                <Button color="primary" onClick={ () =>  this.logMeOut()} >
                    <i className="fa fa-sign-in fa-lg" /> Confirm
                </Button>
                <Button color="secondary" onClick={() => this.props.toggler()}  >
                    <i className="fa fa-sign-in fa-lg" /> Cancel
                </Button>
                {console.log("suppper duppper ", )}
            </React.Fragment>
        )
    }
}

Logout.propTypes = {
    onClose: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Logout);
  

// export default Login