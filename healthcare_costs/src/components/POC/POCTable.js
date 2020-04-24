import React from 'react'
import MaterialTable from 'material-table'
import {Loading} from '../Loading'
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



let myColumns =  
[
  { title: 'Operation Name', field: 'HCPCSDescription',  },
  { title: 'Avg Medicare Payment', field: 'AvgMedPayment', initialEditValue: 'initial edit value' },
  { title: 'Avg Allowed Amt', field: 'AvgAllowedAmnt', type: 'numeric' },
  { title: 'Provider State', field: 'ProviderState', initialEditValue: 'initial edit value',  },
  { title: 'Services Covered by Medicare', field: 'ServicesCoveredbyMedicare', type: 'numeric' },
]

function POCTable(props){
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
            { title: 'Operation Name', field: 'HCPCSDescription' },
            { title: 'Avg Medicare Payment', field: 'AvgMedPayment', initialEditValue: 'initial edit value' },
            { title: 'Avg Allowed Amt', field: 'AvgAllowedAmnt', type: 'numeric' },
            { title: 'Provider State', field: 'ProviderState', initialEditValue: 'initial edit value' },
            { title: 'Services Covered by Medicare', field: 'ServicesCoveredbyMedicare', type: 'numeric' },
          ]
        }else if(!props.filterBy.operation && props.filterBy.state.label){
          myColumns =  
          [
            { title: 'Operation Name', field: 'HCPCSDescription' },
            { title: 'Avg Medicare Payment', field: 'AvgMedPayment', initialEditValue: 'initial edit value' },
            { title: 'Avg Allowed Amt', field: 'AvgAllowedAmnt', type: 'numeric' },
            { title: 'Provider State', field: 'ProviderState', initialEditValue: 'initial edit value', defaultFilter: `${props.filterBy.state.label}` },
            { title: 'Services Covered by Medicare', field: 'ServicesCoveredbyMedicare', type: 'numeric' },
          ]
        }else if(props.filterBy.operation.label && !props.filterBy.state){
          myColumns =  
          [
            { title: 'Operation Name', field: 'HCPCSDescription', defaultFilter: `${props.filterBy.operation.label}` },
            { title: 'Avg Medicare Payment', field: 'AvgMedPayment', initialEditValue: 'initial edit value' },
            { title: 'Avg Allowed Amt', field: 'AvgAllowedAmnt', type: 'numeric' },
            { title: 'Provider State', field: 'ProviderState', initialEditValue: 'initial edit value'},
            { title: 'Services Covered by Medicare', field: 'ServicesCoveredbyMedicare', type: 'numeric' },
          ]
        }else if( props.filterBy.operation && props.filterBy.state){
          myColumns =  
          [
            { title: 'Operation Name', field: 'HCPCSDescription' , defaultFilter: `${props.filterBy.operation.label}` },
            { title: 'Avg Medicare Payment', field: 'AvgMedPayment', initialEditValue: 'initial edit value' },
            { title: 'Avg Allowed Amt', field: 'AvgAllowedAmnt', type: 'numeric' },
            { title: 'Provider State', field: 'ProviderState', initialEditValue: 'initial edit value' , defaultFilter: `${props.filterBy.state.label}`  },
            { title: 'Services Covered by Medicare', field: 'ServicesCoveredbyMedicare', type: 'numeric' },
          ]
        }
      }
    
        
     
    return(
      <React.Fragment>
                <MaterialTable
          title="Proof of Concept: HealthCare Costs"
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
        
      </React.Fragment>


    )
}

  export default POCTable