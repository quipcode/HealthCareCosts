import * as ActionTypes from './ActionTypes'
import {baseUrl} from '../../shared/baseUrl'
import {serverUrl} from '../../shared/serverUrl'
import setAuthToken from '../../utils/setAuthToken'
import jwt_decode from "jwt-decode";
import axios from 'axios'
import {browserHistory } from '../../index'
import {useHistory  } from 'react-router-dom';
import history from '../../history';

// const history = useHistory();

export const fetchHealthCareCosts = () => dispatch => {
    dispatch(healthCareCostsLoading())
    // return fetch(baseUrl + 'healthcarecosts')
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
    // return fetch(baseUrl + 'HCPCS_Operation')
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
    // return fetch(baseUrl + 'usstates')
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
    //   .then()
    //   .catch(err => dispatch({
    //       type: ActionTypes.LOGIN_FAILED,
    //       payload: err
    //   }))

    //   .catch(error => dispatch(loginFailed(error.message))
    .catch(error => {
      console.log('post comment', error.message, error);
      alert('We were unable to log you in \nError: ' + error.message);
    })
}

export const testbasicfunct = creds => {
    console.log("basic funct", creds)
}

const redirect = redirectUrl => {
    window.location = redirectUrl;
  };

export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken")
    setAuthToken(false)
    dispatch(setCurrentUser({}))
    dispatch(addUserProfile({}))
    history.push('/home')
    //need to reroute here so user doesn't see alert
    // browserHistory.push('/home')
    // redirect('/home')
//    history.push('/home')
// this.props.history.push('/home')
    // dispatch(setCurrentUser({}))
}

export const getUserProfile = userId => dispatch =>{
    // dispatch(userprofileLoading())
    // axios
    //     .get(serverUrl + 'users/' + userId,  {
    //         validateStatus: function (status) {
    //           return status < 500; // Reject only if the status code is greater than or equal to 500
    //         }})
    //     .then(res => {
    //         if(res){
    //             return res
    //         }else{
    //             const error = new Error(`Error ${res.status}: ${res.statusText}`)
    //             error.response = res
    //             throw error
    //         }
    //     },
    //         error => {
    //             const errMess = new Error(error.message);
    //             throw errMess;
    //         }
    //     )
    //     .then(res => res.json())
    //     .then(userprofile => dispatch(addUserProfile(userprofile)))
    //     .catch(error => dispatch(userprofileFailed(error.message)))
    axios
    .get(serverUrl + 'users/' + userId, {
        validateStatus: function (status) {
          return status < 500; // Reject only if the status code is greater than or equal to 500
        }})
    .then()
    ///the issue with my get logged in user is because the res.ok is only applicable to the fetch method
        .then(function(res){console.log(res, res.ok)})
    .catch(function (error) {
        console.log(error.toJSON());
      });

    //   dispatch(USStatesLoading())
    //   return fetch(serverUrl + 'usstates')
    //   // return fetch(baseUrl + 'usstates')
    //   .then(response => {
    //       if(response.ok){
    //           return response
    //       }else{
    //           const error = new Error(`Error ${response.status}: ${response.statusText}`); 
    //           error.response = response
    //           throw error;
    //       }
    //   },
    //       error =>{
    //           const errMess = new Error(error.message);
    //           throw errMess
    //       }
    //   )
      
    //   .then(response => { console.log(response)})
    //   .then(USStatesdata => dispatch(addUSStates(USStatesdata)))
    //   .catch(error => dispatch(USStatesFailed(error.message)))
}
export const patchUserProfile = userId => dispatch =>{
    // export const postUserProfile = function(data){
        dispatch(userprofileLoading())
        // console.log("hi there", data)
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

// export const postUserProfile = (profile) => ({
//     axios
    
        
// })
