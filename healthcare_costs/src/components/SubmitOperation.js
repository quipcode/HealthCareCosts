import React, { Component, useState } from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { Control, Form, Errors, actions, component } from 'react-redux-form';
import {  Button, Label, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {connect} from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form'
import FormSubmitOperation from './Form/FormSubmitOperation'
import DropdownList from 'react-widgets/lib/DropdownList'
import {postUserOperations} from '../redux/actions/ActionCreators'
import PropTypes from "prop-types";
import FormSuggestOperation from './Form/FormSuggestOperation';

// import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button,  Modal, ModalHeader, ModalBody} from 'reactstrap'


// import {postFeedback} from '../redux/actions/ActionCreators'

const required = val => val && val.length;
// const maxLength = len => val => !val || (val.length <= len);
// const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
// const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class SubmissionForm extends Component{
    constructor(props){
        super(props)
       
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            operationsList: [],
            statesList: [],
            toggleLoginModal: false,
            modalLoginToggler: false,
            show: false,
            isModalOpen: false

        }
        this.handleSubmit = this.handleSubmit.bind(this) 
        
        // Format fetched opeartion into options then sort into an array
        let operations = [];
        this.props.hcpcsoperations.forEach(({ value, label }) => operations.push({ value, label }));
        let operationsSet = [...new Set(operations.map(moment => moment.label))];
        this.state.operationsList = operationsSet.sort()
            .map((label, index) => <option key={index}>{label}</option>);
        
        // Format fetched states into a sorted array
        let states = [];
        this.props.states.forEach(function({value, label}){
            if(label !== "Nation"){
                states.push({ value, label })
            }
        })
        let statesSet = [...new Set(states.map(moment => moment.label))];
        this.state.statesList = statesSet.sort().map((label, index) => <option key={index}>{label}</option>);  
        // const [toggleLoginModal, modalLoginToggler] = useState(false)
    }

    // toggleLoginModal = useState(false)
    // modalLoginToggler = useState(false)
        submitMyForm(data) {
            const {createRecord, resetForm} = this.props;
            return createRecord(data).then(() => {
            resetForm();
            // do other success stuff
            });
        }
        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

    handleSubmit(event) {
       event.preventDefault()
        // console.log("in handle sub", values)
        
        
        // resetForm();
        // this.props.postUserOperations(values)
        // alert("your operation has been submitted")
        // this.handleSubmit(this.submitMyForm.bind(this))
    } 
    render(){
        return (
            <div className="container">
                <div >
                    <h2>Submit an operation</h2>
                    <hr />
                </div>
                {/* val => console.log("hello there", val, this.state.statesList ) */}
                {/* onSubmit={val => this.handleSubmit(val)} */}
                <FormSubmitOperation  userid={this.props.user.id} states={this.state.statesList} medops={this.state.operationsList} />
            <div className="row row-content">                    
                <div className="col-12">            
                    <hr />
                    <span>Don't see the operation you had listed please fill out our suggestion form</span>
                    <Button onClick={this.toggleModal} className="float-right" color="info">
                        Suggest Operation
                    </Button>
                </div>
                
          
        
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}><h2>Suggest an operation</h2></ModalHeader>
                    <ModalBody>
                        <FormSuggestOperation  userid={this.props.user.id} toggy={this.toggleModal}/>
                    </ModalBody>
                </Modal>
            </div>   
            </div>
          );
        }
    
}


SubmissionForm.propTypes = {
    postUserOperations: PropTypes.func.isRequired,
  };
  
//   const mapStateToProps = state => ({
//     auth: state.auth,
//     errors: state.errors
//   });
  
//   export default connect(
//     mapStateToProps,
//     { postUserOperations }
//   )(SubmissionForm);

const mapDispatchToProps = dispatch => ({
    // ...other methods,
    postUserOperations,
    dispatch                // ← Add this
 })

export default connect(null, mapDispatchToProps)(SubmissionForm)

