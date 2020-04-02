import React, { Component } from 'react';
import Select from 'react-select';
import {Button} from 'reactstrap';

// function RenderHealthCareDataPoint({data}){
//     return(
//         <div>
//     <p>Average Medicare Payment: {data['Average Medicare Payment']}</p>
//     <p>Average Allowed Amount: {data['Average Allowed Amount']}</p>
//     <p>HCPCS Code: {data['HCPCS Code']}</p>
//     <p>HCPCS Description: {data['HCPCS Description']}</p>
//     <p>Services Covered by Medicare: {data['Services Covered by Medicare']}</p>
//     <p>Total Allowed Amount: {data['Total Allowed Amount']}</p>
//     <p>Total Medicare Payment: {data['Total Medicare Payment']}</p>
//     <p>Provider State:{data['Provider State']}</p>
//     </div>
//     )
// }


const HCPCS_Operation = [
        {label: "Removal of impact ear wax" , value:1 },
        {label: "Administration of 1 vaccine"   , value:2 },
        {label: "Routine EKG using at least 12 leads including interpretation and report"   , value:3 },
        {label: "Routine electrocardiogram (EKG) with tracing using at least 12 leads"  , value:4 },
        {label: "Routine electrocardiogram (EKG) using at least 12 leads with interpretation and report"    , value:5 },
        {label: "Measurement and graphic recording of total and timed exhaled air capacity" , value:6 },
        {label: "Injection of incremental dosages of allergen"  , value:7 },
        {label: "Injection of incremental dosages of allergen, 2 or more injections"    , value:8 },
        {label: "Infusion into a vein for therapy, prevention, or diagnosis up to 1 hour"   , value:9 },
        {label: "Injection into tissue or muscle for therapy, diagnosis, or prevention" , value:10 },
        {label: "New patient office or other outpatient visit, typically 20 minutes"    , value:11 },
        {label: "New patient office or other outpatient visit, typically 30 minutes"    , value:12},
        {label: "New patient office or other outpatient visit, typically 45 minutes"    , value:13 },
        {label: "New patient office or other outpatient visit, typically 60 minutes"    , value:14 },
        {label: "Established patient office or other outpatient visit, typically 5 minutes" , value:15 },
        {label: "Established patient office or other outpatient visit, typically 10 minutes"    , value:16 },
        {label: "Established patient office or other outpatient visit, typically 15 minutes"    , value:17 },
        {label: "Established patient office or other outpatient, visit typically 25 minutes"    , value:18 },
        {label: "Established patient office or other outpatient, visit typically 40 minutes"    , value:19 },
        {label: "Administration of seasonal flu shot*"  , value:20 },
        {label: "Administration of pneumonia Shot*" , value:21 },
        {label: "Breast and pelvic cancer screening exam"   , value:22 },
        {label: "Electrical stimulation therapy"    , value:23 },
        {label: "Annual wellness visit for new Medicare enrollees"  , value:24 },
        {label: "Subsequent annual wellness visit for Medicare beneficiaries"  , value:25 },


]

const states = [

            {label: "AK", value:1 },
            {label: "AL", value:2 },
            {label: "AR", value:3 },
            {label: "AZ", value:4 },
            {label: "CA", value:5 },
            {label: "CO", value:6 },
            {label: "CT", value:7 },
            {label: "DC", value:8 },
            {label: "DE", value:9 },
            {label: "FL", value:10 },
            {label: "GA", value:11 },
            {label: "GU", value:12 },
            {label: "HI", value:13 },
            {label: "IA", value:14 },
            {label: "ID", value:15 },
            {label: "IL", value:16 },
            {label: "IN", value:17 },
            {label: "KS", value:18 },
            {label: "KY", value:19 },
            {label: "LA", value:20 },
            {label: "MA", value: 21},
            {label: "MD", value:22 },
            {label: "ME", value:23 },
            {label: "MI", value:24 },
            {label: "MN", value:25 },
            {label: "MO", value:26 },
            {label: "MS", value:27 },
            {label: "MT", value:28 },
            {label: "NC", value: 29},
            {label: "ND", value:30 },
            {label: "NE", value:31 },
            {label: "NH", value:32 },
            {label: "NJ", value:33 },
            {label: "NM", value: 34},
            {label: "NV", value: 35},
            {label: "NY", value:36 },
            {label: "OH", value: 37},
            {label: "OK", value:38 },
            {label: "OR", value: 39},
            {label: "PA", value:40 },
            {label: "RI", value:41},
            {label: "SC", value: 42},
            {label: "SD", value: 43},
            {label: "TN", value:44 },
            {label: "TX", value: 45},
            {label: "UT", value: 46},
            {label: "VA", value: 47},
            {label: "VT", value: 48},
            {label: "WA", value: 49},
            {label: "WI", value:50 },
            {label: "WV", value:51 },
            {label: "WY", value: 52},
            {label: "Nation", value: 53},


]

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


// export default class Home extends Component {

// }

function Home(props){
    // if(props.isLoading){
    //     return
    // }
  

    // const data = props.healthcarecosts.healthcarecosts.map(element => {
    //     return(
    //         <div key={element['HCPCS Code']}>
    //             <RenderHealthCareDataPoint data ={ element}/>
    //         </div>
    //     )
    // });

    
    if(props.healthcarecosts){
        return(            
            // <div className="container">
            //     <div className="row">
            //         <div className="col">
            //             The begining
            //         </div>
            //     </div>
                
            // </div>

            <div className="app">
                <div className="container selection-grid ">
                    <h1>Select an operation and/or state</h1>
                    <div className="row selection-row">
                        <div className="col-md-8 selectionDropdown">
                            <Select options={HCPCS_Operation} placeholder="Operation"   />
                        </div>
                        <div className="col-md-4 selectionDropdown" >
                            <Select options={states} placeholder="States" />
                        </div>
                        
                    </div>
                  <Button id="searchBtn" onClick={() => window.alert("button clicked")}>Search</Button>
                </div>
            </div>

        //     <div class="dropdown">
        //     <button onclick="myFunction()" class="dropbtn">Dropdown</button>
        //     <div id="myDropdown" class="dropdown-content">
        //       <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()"/>
        //       <a href="#about">About</a>
        //       <a href="#base">Base</a>
        //       <a href="#blog">Blog</a>
        //       <a href="#contact">Contact</a>
        //       <a href="#custom">Custom</a>
        //       <a href="#support">Support</a>
        //       <a href="#tools">Tools</a>
        //     </div>
        //   </div> 
        )
    }
   
}

export default Home