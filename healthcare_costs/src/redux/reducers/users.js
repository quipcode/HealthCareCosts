import * as ActionTypes from '../actions/ActionTypes'

export const UsersLogin = (state = {
    isLoading: true,
    errMess: null,
    sessionToken: []
}, action) => {
    switch(action.types){
        case ActionTypes.LOGIN_SUCCESS:
            return {...state, isLoading: false, errMess: null, sessionToken: action.payload}
        case ActionTypes.LOGIN_LOADING:
            return {...state, isLoading: true, errMess: null, sessionToken: []}
        case ActionTypes.LOGIN_FAILED:
            return {...state, isLoading: false, errMess: action.payload}
        default:
            return state
    }
}