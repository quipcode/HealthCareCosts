import React from 'react';

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


    // "Average Medicare Payment": 39,
    //   "Average Allowed Amount": 59,
    //   "HCPCS Code": "69210",
    //   "HCPCS Description": "Removal of impact ear wax",
    //   "Services Covered by Medicare": "1,430",
    //   "Total Allowed Amount": "84,220",
    //   "Total Medicare Payment": "56,482",
    //   "Provider State": "AK"
    )
}

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
            // {props.healthcarecosts.healthcarecosts[0]}
            <div>
            <h1>Hello there   </h1>
                {data}
            </div>
            
        )
    }
   
}

export default Home