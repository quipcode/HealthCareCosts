// import React from 'react'
// import { Field, reduxForm } from 'redux-form'

// import DropdownList from 'react-widgets/lib/DropdownList'

import React, { Component } from 'react';
import { reduxForm, Field, change, getFormValues, formValueSelector  } from 'redux-form';
import { connect } from 'react-redux';
import DropdownList from 'react-widgets/lib/DropdownList'

class SimpleForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.initialize({ userid: this.props.userid });
    // set the value individually
    this.props.dispatch(change('myFormName', 'anotherField', 'value'));
  }

  handleSubmit(event, val){
    console.log(event)
    console.log(val)
    event.preventDefault();
    
  
  }
  onChange(){
    console.log(" Triggered")
    }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        
        <Field name="userid" component='input' hidden placeholder="Number" />
        <Field name="anotherField" component='input' />
        <Field name="anotherField2" component='input' />
        <Field className="form-control" name="state" component='select'  >
          {this.props.states}
           
  
            </Field>
          {/* <Field
            name="favoriteColor2"
            component={DropdownList}
            data={['red', 'blue']}
            valueField="value"
            textField="color"
            onChange={this.onChange.bind(this)}
            />
          <Field
            name="favoriteColor"
            component={DropdownList}
            data={this.props.flame}
            valueField="value"
            textField="color"/> */}
        <div>
           <button type="submit" >Submit</button>
           {/* <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button> */}
         </div>
      </form>
    )
  }
}

SimpleForm = reduxForm({ 
  form: 'myFormName' 
})(SimpleForm);







// export default SimpleForm
export default connect(state => ({ 
  // alternatively, you can set initial values here...
  // values: getFormValues('myFormName')(state),
  // formValues: getFormValues('myFormName')(state),
  initialValues: {
    accountno: 'some value here'
  } 
}))(SimpleForm);



// const SimpleForm = (props, flame) => {
//     const { handleSubmit, pristine, reset, submitting } = props
//     return (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name</label>
//           <div>
//             {/* <Field className="form-control" name="firstName" component="input" type="text" placeholder="First Name"/> */}
//             <p>wtf</p>
//              <Field className="form-control" name="userid"   component="input"   placeholder="User ID" value="baddy" defaultValue="13"/>
//              <input value="goody" ></input>
//             <Field
//           name="favoriteColor"
//           component={DropdownList}
//           data={props.flame}
//           valueField="value"
//           textField="color"/>
          
//           </div>
//         </div>
//         <div>
//         <label>Favorite Color</label>
  
//       </div>
//         <div>
//           <label>Last Name</label>
//           <div>
//             <Field name="lastName" className="form-control" component="input" type="text" placeholder="Last Name"/>
//           </div>
//         </div>
//         <div>
//           <label>Email</label>
//           <div>
//             <Field name="email" className="form-control" component="input" type="email" placeholder="Email"/>
//           </div>
//         </div>
//         <div>
//           <label>Sex</label>
//           <div>
//             <label><Field name="sex" className="form-control" component="input" type="radio" value="male"/> Male</label>
//             <label><Field name="sex" className="form-control" component="input" type="radio" value="female"/> Female</label>
//           </div>
//         </div>
//         <div>
//           <label>Favorite Color</label>
//           <div>
//             <Field name="favoriteColor" className="form-control" component="select">
//               <option></option>
//               <option value="ff0000">Red</option>
//               <option value="00ff00">Green</option>
//               <option value="0000ff">Blue</option>
//             </Field>
//           </div>
//         </div>
//         <div>
//           <label htmlFor="employed">Employed</label>
//           <div>
//             <Field name="employed" id="employed" component="input" type="checkbox"/>
//           </div>
//         </div>
//         <div>
//           <label>Notes</label>
//           <div>
//             <Field name="notes" component="textarea"/>
//           </div>
//         </div>
//         <div>
//           <button type="submit" disabled={pristine || submitting}>Submit</button>
//           <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
//         </div>
//       </form>
//     )
//   }
  
//   export default reduxForm({
//     form: 'simple'  // a unique identifier for this form
//   })(SimpleForm)
  
  