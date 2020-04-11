import React from 'react'
import MaterialTable from 'material-table'
// import {Promise} from 'react-promise'
import {Loading} from './Loading'
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
// import Header from './HeaderComponent';

const tableIcons = {
Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


// const myColumns =  [
//   { title: 'Operation Name', field: 'HCPCS Description' },
//   { title: 'Avg Medicare Payment', field: 'Average Medicare Payment', initialEditValue: 'initial edit value' },
//   { title: 'Avg Allowed Amt', field: 'Average Allowed Amount', type: 'numeric' },
//   { title: 'Provider State', field: 'Provider State', initialEditValue: 'initial edit value', defaultFilter: "" },
//   { title: 'Services Covered by Medicare', field: 'Services Covered by Medicare', type: 'numeric' },
//   {
//     title: 'Birth Place',
//     field: 'birthCity',
//     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//   },
// ]
let myColumns =  
[
  { title: 'Operation Name', field: 'HCPCS Description',  },
  { title: 'Avg Medicare Payment', field: 'Average Medicare Payment', initialEditValue: 'initial edit value' },
  { title: 'Avg Allowed Amt', field: 'Average Allowed Amount', type: 'numeric' },
  { title: 'Provider State', field: 'Provider State', initialEditValue: 'initial edit value',  },
  { title: 'Services Covered by Medicare', field: 'Services Covered by Medicare', type: 'numeric' },
]
// function setColumns({props}){
  
//   if(props.filterBy.operation.label && props.filterBy.state.label){
//       myColumns =  
//       [
//         { title: 'Operation Name', field: 'HCPCS Description', defaultFilter: `${props.filterBy.operation.label}` },
//         { title: 'Avg Medicare Payment', field: 'Average Medicare Payment', initialEditValue: 'initial edit value' },
//         { title: 'Avg Allowed Amt', field: 'Average Allowed Amount', type: 'numeric' },
//         { title: 'Provider State', field: 'Provider State', initialEditValue: 'initial edit value', defaultFilter: `${props.filterBy.state.label}` },
//         { title: 'Services Covered by Medicare', field: 'Services Covered by Medicare', type: 'numeric' },
//       ]
//   }else if(props.filterBy.operation.label && !props.filterBy.state.label){
//     myColumns =  
//     [
//       { title: 'Operation Name', field: 'HCPCS Description', defaultFilter: `${props.filterBy.operation.label}` },
//       { title: 'Avg Medicare Payment', field: 'Average Medicare Payment', initialEditValue: 'initial edit value' },
//       { title: 'Avg Allowed Amt', field: 'Average Allowed Amount', type: 'numeric' },
//       { title: 'Provider State', field: 'Provider State', initialEditValue: 'initial edit value', defaultFilter: null },
//       { title: 'Services Covered by Medicare', field: 'Services Covered by Medicare', type: 'numeric' },
//     ]
//   }
  
// }

// setColumns({props})
function MyTable(props){
    console.log("props", props)
    if(props.hcCosts.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
            
        )
    }

    if(props.hcCosts.errMess){
        return(
            <div className="container">
                <div className="col">
                    {props.hcCosts.errMess}
                </div>
                
            </div>
            
        )
    }
    if(props.filterBy){
        if( !props.filterBy.operation && !props.filterBy.state){
          myColumns =  
          [
            { title: 'Operation Name', field: 'HCPCS Description' },
            { title: 'Avg Medicare Payment', field: 'Average Medicare Payment', initialEditValue: 'initial edit value' },
            { title: 'Avg Allowed Amt', field: 'Average Allowed Amount', type: 'numeric' },
            { title: 'Provider State', field: 'Provider State', initialEditValue: 'initial edit value' },
            { title: 'Services Covered by Medicare', field: 'Services Covered by Medicare', type: 'numeric' },
          ]
        }else if(!props.filterBy.operation && props.filterBy.state.label){
          myColumns =  
          [
            { title: 'Operation Name', field: 'HCPCS Description' },
            { title: 'Avg Medicare Payment', field: 'Average Medicare Payment', initialEditValue: 'initial edit value' },
            { title: 'Avg Allowed Amt', field: 'Average Allowed Amount', type: 'numeric' },
            { title: 'Provider State', field: 'Provider State', initialEditValue: 'initial edit value', defaultFilter: `${props.filterBy.state.label}` },
            { title: 'Services Covered by Medicare', field: 'Services Covered by Medicare', type: 'numeric' },
          ]
        }else if(props.filterBy.operation.label && !props.filterBy.state){
          myColumns =  
          [
            { title: 'Operation Name', field: 'HCPCS Description', defaultFilter: `${props.filterBy.operation.label}` },
            { title: 'Avg Medicare Payment', field: 'Average Medicare Payment', initialEditValue: 'initial edit value' },
            { title: 'Avg Allowed Amt', field: 'Average Allowed Amount', type: 'numeric' },
            { title: 'Provider State', field: 'Provider State', initialEditValue: 'initial edit value'},
            { title: 'Services Covered by Medicare', field: 'Services Covered by Medicare', type: 'numeric' },
          ]
        }else if( props.filterBy.operation && props.filterBy.state){
          myColumns =  
          [
            { title: 'Operation Name', field: 'HCPCS Description' , defaultFilter: `${props.filterBy.operation.label}` },
            { title: 'Avg Medicare Payment', field: 'Average Medicare Payment', initialEditValue: 'initial edit value' },
            { title: 'Avg Allowed Amt', field: 'Average Allowed Amount', type: 'numeric' },
            { title: 'Provider State', field: 'Provider State', initialEditValue: 'initial edit value' , defaultFilter: `${props.filterBy.state.label}`  },
            { title: 'Services Covered by Medicare', field: 'Services Covered by Medicare', type: 'numeric' },
          ]
        }
      }
    
        
     
    return(
        <MaterialTable
          title="HealthCare Costs"
          columns={myColumns}
          data={props.hcCosts.healthcarecosts}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = props.hcCosts.healthcarecosts;
                    data.push(newData);
                    this.setState({ data }, () => resolve());
                  }
                  resolve()
                }, 1000)
              })

          }}
          icons={tableIcons}
          options={{filtering: true}}
          
        />

    )
}

// class HealthCareCostTable extends Component{
//   constructor(props){
//     super(props);

//     this.state = {
//       myColumns: [
//         { title: 'Operation Name', field: 'HCPCS Description' },
//         { title: 'Avg Medicare Payment', field: 'Average Medicare Payment', initialEditValue: 'initial edit value' },
//         { title: 'Avg Allowed Amt', field: 'Average Allowed Amount', type: 'numeric' },
//         { title: 'Provider State', field: 'Provider State', initialEditValue: 'initial edit value', defaultFilter: `${props.filterBy}` },
//         { title: 'Services Covered by Medicare', field: 'Services Covered by Medicare', type: 'numeric' },
//       ]
//     }

//   }

//   render(){
//     return(
//       <MaterialTable
//       title="HealthCare Costs"
//       columns={this.state.myColumns}
//       data={props.hcCosts.healthcarecosts}
//       editable={{
//         onRowAdd: newData =>
//           new Promise((resolve, reject) => {
//             setTimeout(() => {
//               {
//                 const data = props.hcCosts.healthcarecosts;
//                 data.push(newData);
//                 this.setState({ data }, () => resolve());
//               }
//               resolve()
//             }, 1000)
//           })

//       }}
//       icons={tableIcons}
//       options={{filtering: true}}
      
//     />

//     )
//   }
 
// }

// class Editable extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         columns: [
//           { title: 'Operation Name', field: 'HCPCS Description' },
//           { title: 'Avg Medicare Payment', field: 'Average Medicare Payment', initialEditValue: 'initial edit value' },
//           { title: 'Avg Allowed Amt', field: 'Average Allowed Amount', type: 'numeric' },
//           { title: 'Provider State', field: 'Provider State', initialEditValue: 'initial edit value' },
//           { title: 'Services Covered by Medicare', field: 'Services Covered by Medicare', type: 'numeric' },
//           {
//             title: 'Birth Place',
//             field: 'birthCity',
//             lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//           },
//         ],
//         // data: [
//         //   { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//         //   { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
//         // ],
//         data: props.hcCosts.healthcarecosts
//       }
//     }
  
//     render() {
//         console.log("dupr", this.state.durp)
//       return (
//           <React.Fragment>
//               <h1>HealthCare Costs</h1>
//         <MaterialTable
//           title="HealthCare Costs"
//           columns={this.state.columns}
//           data={this.state.data}
//           editable={{
//             onRowAdd: newData =>
//               new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                   {
//                     const data = this.state.data;
//                     data.push(newData);
//                     this.setState({ data }, () => resolve());
//                   }
//                   resolve()
//                 }, 1000)
//               })
//             // onRowUpdate: (newData, oldData) =>
//             //   new Promise((resolve, reject) => {
//             //     setTimeout(() => {
//             //       {
//             //         const data = this.state.data;
//             //         const index = data.indexOf(oldData);
//             //         data[index] = newData;
//             //         this.setState({ data }, () => resolve());
//             //       }
//             //       resolve()
//             //     }, 1000)
//             //   }),
//             // onRowDelete: oldData =>
//             //   new Promise((resolve, reject) => {
//             //     setTimeout(() => {
//             //       {
//             //         let data = this.state.data;
//             //         const index = data.indexOf(oldData);
//             //         data.splice(index, 1);
//             //         this.setState({ data }, () => resolve());
//             //       }
//             //       resolve()
//             //     }, 1000)
//             //   }),
//           }}
//           icons={tableIcons}
          
//         />
//         {/* <p>hi there {this.state.durp}</p> */}
//         </React.Fragment>
//       )
//       console.log("dupr", this.state)
//     }
//   }

//   class BasicSorting extends React.Component {
//     render() {
//       return (
//         <MaterialTable
//           title="Basic Sorting Preview"
//           columns={[
//             { title: 'Name', field: 'name' },
//             { title: 'Surname', field: 'surname' },
//             { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//             {
//               title: 'Birth Place',
//               field: 'birthCity',
//               lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//             },
//           ]}
//           data={[
//             { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//             { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
//           ]}        
//           options={{
//             sorting: true
//           }}
//         />
//       )
//     }
//   }
  export default MyTable