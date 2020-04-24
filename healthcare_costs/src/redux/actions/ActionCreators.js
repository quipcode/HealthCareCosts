import * as ActionTypes from './ActionTypes'
import {serverUrl} from '../../shared/serverUrl'
import setAuthToken from '../../utils/setAuthToken'
import jwt_decode from "jwt-decode";
import axios from 'axios'
import history from '../../history';

// const history = useHistory();

export const fetchHealthCareCosts = () => dispatch => {
    dispatch(healthCareCostsLoading())
    return fetch(serverUrl + 'samplehcc')
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
    return fetch(serverUrl + 'hccoperations')
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
    return fetch(serverUrl + 'usstates')
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


export const loginLoading = () => ({
    type: ActionTypes.LOGIN_LOADING
})

export const loginFailed = errMess => ({
    type: ActionTypes.LOGIN_FAILED,
    payload: errMess
})

export const loginSuccess = logintoken => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload : logintoken
})


// Set logged in user
export const setCurrentUser = decoded => {
    return {
      type: ActionTypes.SET_CURRENT_USER,
      payload: decoded
    };
  };

export const loginUser = credentials => dispatch =>{

    axios
      .post(serverUrl + 'users/login', credentials, { "content-type": "application/json"})
      .then(res => {
          const {token} = res.data
          localStorage.setItem("jwtToken", token);
          // Set token to Auth header
          setAuthToken(token);
          // Decode token to get user data
          const decoded = jwt_decode(token);
          // Set current user
          dispatch(setCurrentUser(decoded));
          dispatch(getUserProfile(decoded.id));
          console.log("in the post axios login ", decoded.id)
          history.push('/myprofile')
      })

    .catch(error => {
      console.log('post comment', error.message, error);
      alert('We were unable to log you in \nError: ' + error.message);
    })
}

export const testbasicfunct = creds => {
    console.log("basic funct", creds)
}



export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken")
    setAuthToken(false)
    dispatch(setCurrentUser({}))
    dispatch(addUserProfile({}))
    history.push('/home')
}

export const getUserProfile = userId => dispatch =>{

    axios
    .get(serverUrl + 'users/' + userId, {
        validateStatus: function (status) {
          return status < 500; // Reject only if the status code is greater than or equal to 500
        }})
    .then(res => {
        const profile = res.data
        delete profile.password;
        dispatch(addUserProfile(profile))
    })
    
    .catch(err => {
        dispatch(userprofileFailed(err.message))
        alert("We were unable to pull your profile at this time")
    })

}
export const patchUserProfile = (profile, userId) => dispatch =>{
        dispatch(userprofileLoading())
        axios
        .patch(serverUrl  + 'users/' + userId, profile)
        .then(res =>{
            dispatch(addUserProfile(profile))
            alert("Your profile has been updated")
        })
        .catch(err=> {
            dispatch(userprofileFailed(err.message))
            alert("We are unable to update your profile at this time")
        })
}
export const userprofileLoading = () => ({
    type: ActionTypes.USERPROFILE_LOADING
})

export const userprofileFailed = errMess => ({
    type: ActionTypes.USERPROFILE_FAILED,
    payload: errMess
})

export const addUserProfile = userprofile => ({
    type: ActionTypes.USERPROFILE_SUCCESS,
    payload: userprofile
})


export const postFeedback = (theFeedback)  => {
    axios
    .post(serverUrl + 'feedback', theFeedback, { "content-type": "application/json"})
    .then(res => {
        if(res.statusText === "OK"){
            alert("Your feedback has been submitted")
        }
    })
    .catch(err => {
        console.log("post feedback", err.message, err)
        alert('We were unable to submit your feedback \nError: ' + err.message)
    })
};
