import React from 'react';
import Header from './HeaderComponent'
import Select from 'react-select';
import {Button} from 'reactstrap';

function RenderHealthCareDataPoint({data}){
    return(
        <div>
    <p>Average Medicare Payment: {data['Average Medicare Payment']}</p>
    <p>Average Allowed Amount: {data['Average Allowed Amount']}</p>
    <p>HCPCS Code: {data['HCPCS Code']}</p>
    <p>HCPCS Description: {data['HCPCS Description']}</p>
    <p>Services Covered by Medicare: {data['Services Covered by Medicare']}</p>
    <p>Total Allowed Amount: {data['Total Allowed Amount']}</p>
    <p>Total Medicare Payment: {data['Total Medicare Payment']}</p>
    <p>Provider State:{data['Provider State']}</p>
    </div>
    )
}

const scaryAnimals = [
    { label: "Alligators", value: 1 },
    { label: "Crocodiles", value: 2 },
    { label: "Sharks", value: 3 },
    { label: "Small crocodiles", value: 4 },
    { label: "Smallest crocodiles", value: 5 },
    { label: "Snakes", value: 6 },
  ];

  const babyAnimals = [
    { label: "Alligators", value: 1 },
    { label: "Crocodiles", value: 2 },
    { label: "Sharks", value: 3 },
    { label: "Small crocodiles", value: 4 },
    { label: "Smallest crocodiles", value: 5 },
    { label: "Snakes", value: 6 },
  ];

  const cryAnimals = [
    { label: "Alligators", value: 1 },
    { label: "Crocodiles", value: 2 },
    { label: "Sharks", value: 3 },
    { label: "Small crocodiles", value: 4 },
    { label: "Smallest crocodiles", value: 5 },
    { label: "Snakes", value: 6 },
  ];

function Home(props){
    // if(props.isLoading){
    //     return
    // }
  

    const data = props.healthcarecosts.healthcarecosts.map(element => {
        return(
            <div key={element['HCPCS Code']}>
                <RenderHealthCareDataPoint data ={ element}/>
            </div>
        )
    });

    
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
                    <h1>Select an operation, state, or your city</h1>
                    <div className="row selection-row">
                        <div className="col-md-4 selectionDropdown">
                            <Select options={scaryAnimals} />
                        </div>
                        <div className="col-md-4 selectionDropdown">
                            <Select options={babyAnimals} />
                        </div>
                        <div className="col-md-4 selectionDropdown">
                            <Select options={babyAnimals} />
                        </div>
                    </div>
                  <Button id="searchBtn">Search</Button>
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