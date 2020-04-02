import * as ActionTypes from './ActionTypes'

export const HCPCSOperations = (state = {
    isLoading: true,
    errMess: null,
    HCPCSOperations: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_HCPCSOPERATION:
            return{...state, isLoading: false, errMess: null, HCPCSOperations: action.payload}
        case ActionTypes.HCPCSOPERATION_LOADING:
            return{...state, isLoading: true, errMess: null, HCPCSOperations: []}
        case ActionTypes.HCPCSOPERATION_FAILED:
            return{...state, isLoading: false, errMess: action.payload}
        default:
            return state
    }
}
