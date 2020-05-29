import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { Control, Form, Errors } from 'react-redux-form';
import { reduxForm, Field, change, getFormValues, formValueSelector, reset } from 'redux-form';
import {  Button, Label, Col, Row} from 'reactstrap'
// import {postFeedback} from '../redux/actions/ActionCreators'
import PropTypes from "prop-types";
import { connect } from "react-redux"



const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);



class FormSuggestOperation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            title: '',
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
        const myFeedback = {...event, userId: this.props.userId}
        // postFeedback(myFeedback)
        // this.props.resetFormSuggestOperation();
    }
    render() {
      return (
          <React.Fragment>
        <div className="container">
        <div className="row row-content">
                    {/* <div className="col-12">
                        <h2>Send us your Feedback</h2>
                        <hr />
                    </div> */}
                    <div className="col-md-12">
                    {/* onSubmit={this.props.handleSubmit(this.onSubmit)} */}
                    <form >
                        
                        <Row className="form-group">
                            
                            <Label htmlFor="coveredByMedicare">Operation</Label>
                            
                            <Field className="form-control" placeholder="Operation" component='input' name="coveredByMedicare"  />
                            
                        </Row>
                        
                        <Row className="form-group">
                            <Label htmlFor="actualPaid">Description</Label>
                            
                            <Field className="form-control" placeholder="Description" component='textarea' name="actualPaid"  />
                         
                        </Row>
                      
                        <Row className="form-group">
                            <Col  >
                                <Button type="submit" className="float-right" color="info">
                                    Suggest Operation
                                </Button>
                            </Col>
                        </Row>
                    </form>
                        {/* <Form model="feedback"  onSubmit={values => this.handleSubmit(values)}>   
                            <Row className="form-group">
                                <Label htmlFor="title" md={2}>Operation</Label>
                                <Col md={10}>
                                    <Control.text model=".title" id="title" name="title"
                                        placeholder="Operation"
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
                                <Label htmlFor="feedback" md={2}>Description</Label>
                                <Col md={10}>
                                    <Control.textarea model=".body" id="feedback" name="feedback"
                                        rows="12"
                                        className="form-control"
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".title"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="info">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form> */}
                    </div>
                </div>
                </div> 
                
                </React.Fragment>
      );
    }
  }

//   FormSuggestOperation.propTypes = {
//     // postFeedback: PropTypes.func.isRequired,
//   };

//   const mapStateToProps = state => ({
//     auth: state.auth,
//     errors: state.errors
//   });
  
//   export default connect(
//     mapStateToProps,
//     // { postFeedback }
//   )(FormSuggestOperation);

  FormSuggestOperation = reduxForm({
    form: 'userOperationSuggestion',
    // validate,
  })(FormSuggestOperation);
  
  export default FormSuggestOperation;
//   export default FormSuggestOperation; 