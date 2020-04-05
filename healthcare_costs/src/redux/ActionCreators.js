import * as ActionTypes from './ActionTypes'
import {baseUrl} from '../shared/baseUrl'

export const fetchHealthCareCosts = () => dispatch => {
    dispatch(healthCareCostsLoading())
    return fetch(baseUrl + 'healthcarecosts')
    .then(response => {
        if(response.ok){
            return response
        }else{
            const error = new Error(`Error ${response.status}: ${response.statusText}`); 
            error.response = response
            throw error;
        }
    },
        error =>{
            const errMess = new Error(error.message);
            throw errMess
        }
    )
    .then(response=> response.json())
    .then(healthcarecostdata => dispatch(addHealthCareCosts(healthcarecostdata)))
    .catch(error => dispatch(healthCareCostsFailed(error.message)))

}

export const healthCareCostsLoading = () => ({
    type: ActionTypes.HEALTHCARECOST_LOADING
})

export const healthCareCostsFailed = errMess =>({
    type: ActionTypes.HEALTHCARECOST_FAILED,
    payload: errMess
})

export const addHealthCareCosts = healthcarecostdata => ({
    type: ActionTypes.ADD_HEALTHCARECOST,
    payload: healthcarecostdata
})


export const fetchHCPCSOperations = () => dispatch => {
    dispatch(HCPCSOperationLoading())
    
    return fetch(baseUrl + 'HCPCS_Operation')
    .then(response => {
        if(response.ok){
            
            return response
        }else{
            const error = new Error(`Error ${response.status}: ${response.statusText}`); 
            error.response = response
            throw error;
        }
    },
        error =>{
            const errMess = new Error(error.message);
            throw errMess
        }
    )
    .then(response=> response.json())
    .then(hcpcsoperations => dispatch(addHCPCSOperations(hcpcsoperations)))
    .catch(error => dispatch(HCPCSOperationFailed(error.message)))

}


export const HCPCSOperationLoading = () => ({
    type: ActionTypes.HCPCSOPERATION_LOADING
})

export const HCPCSOperationFailed = errMess =>({
    type: ActionTypes.HCPCSOPERATION_FAILED,
    payload: errMess
})

export const addHCPCSOperations = hcpcsoperations => ({
    type: ActionTypes.ADD_HCPCSOPERATION,
    payload: hcpcsoperations
})

export const fetchUSStates = () => dispatch => {
    dispatch(USStatesLoading())
    return fetch(baseUrl + 'usstates')
    .then(response => {
        if(response.ok){
            return response
        }else{
            const error = new Error(`Error ${response.status}: ${response.statusText}`); 
            error.response = response
            throw error;
        }
    },
        error =>{
            const errMess = new Error(error.message);
            throw errMess
        }
    )
    .then(response=> response.json())
    .then(USStatesdata => dispatch(addUSStates(USStatesdata)))
    .catch(error => dispatch(USStatesFailed(error.message)))

}


export const USStatesLoading = () => ({
    type: ActionTypes.USSTATES_LOADING
})

export const USStatesFailed = errMess =>({
    type: ActionTypes.USSTATES_FAILED,
    payload: errMess
})

export const addUSStates = USStatesdata => ({
    type: ActionTypes.ADD_USSTATES,
    payload: USStatesdata
})

export const postFeedback = (theFeedback)  => {

    const newFeedback = theFeedback
    // newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (response.ok) {
                // return response;
                alert("Thank you for your feedback " + JSON.stringify(response))
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => { throw error; }
        )
        .then(response => response.json())
        // .then(response => dispatch(addComment(response)))
        // .then(alert("Thank you for your feedback \n" ))
        .catch(error => {
            console.log('post comment', error.message);
            alert('We were unable to submit your feedback \nError: ' + error.message);
        });
};