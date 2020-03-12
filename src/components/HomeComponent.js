import React from 'react';
import Header from './HeaderComponent'

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
            <div className="container">
            <h1>Hello there   </h1>
                {data}
            </div>
        )
    }
   
}

export default Home