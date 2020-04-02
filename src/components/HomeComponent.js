import React, { Component } from 'react';
import Select from 'react-select';
import {Button} from 'reactstrap';


const customStyles = {
    option: (provided, state) => ({
      ...provided,
    //   borderBottom: '2px dotted green',
    //   color: state.isSelected ? 'yellow' : 'black',
    //   backgroundColor: state.isSelected ? 'green' : 'white'
    }),
    control: (provided) => ({
      ...provided,
    //   marginTop: "5%",
    })
  }



// function Home(props){
//     if(props.props.hcpcsoperations){
//         return(            
//             <div className="app">
//                 <div className="container selection-grid ">
//                     <h1>Select an operation and/or state</h1>
//                     <div className="row selection-row">
//                         <div className="col-md-8 selectionDropdown">
//                             {/* <Select options={HCPCS_Operation} placeholder="Operation"   /> */}
//                             <Select options={props.props.hcpcsoperations.hcpcsoperations} placeholder="Operation"   />
//                         </div>
//                         <div className="col-md-4 selectionDropdown" >
//                             {/* <Select options={states} placeholder="States" /> */}
//                             <Select options={props.props.usstates.USStates} onChange={} placeholder="States" />
//                         </div>
                        
//                     </div>
//                   <Button id="searchBtn" onClick={() => window.alert("button clicked")}>Search</Button>
//                 </div>
//             </div>
//         )
//     }
// }

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            operation: '',
            state: '',
            selectedOption: null

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        // alert('Current state is: ' + JSON.stringify(values));
        // postFeedback(values);
        // this.props.resetFeedbackForm();
    
    }

      handleOperationChange = operation => {
          this.setState(
              {operation},
              () => console.log(`state is:`, this.state)
          )
          
      }
      handleStateChange = state => {
        this.setState(
            {state},
            () => console.log(`state is:`, this.state)
        )        
    }
    render(){
        return(            
                        <div className="app">
                            <div className="container selection-grid ">
                                <h1>Select an operation and/or state</h1>
                                <div className="row selection-row">
                                    <div className="col-md-8 selectionDropdown">
                                        
                                        <Select options={this.props.props.hcpcsoperations.hcpcsoperations} onChange={this.handleOperationChange} placeholder="Operation"   />
                                    </div>
                                    <div className="col-md-4 selectionDropdown" >
                                        
                                        <Select options={this.props.props.usstates.USStates} onChange={this.handleStateChange} placeholder="States" />
                                    </div>
                                    
                                </div>
                              <Button id="searchBtn" onClick={() => window.alert("button clicked")}>Search</Button>
                            </div>
                        </div>
                    )
    }

}
export default Home