import * as ActionTypes from './ActionTypes'

export const HCPCSOperations = (state = {
    isLoading: true,
    errMess: null,
    hcpcsoperations: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_HCPCSOPERATION:
            return{...state, isLoading: false, errMess: null, hcpcsoperations: action.payload}
        case ActionTypes.HCPCSOPERATION_LOADING:
            return{...state, isLoading: true, errMess: null, hcpcsoperations: []}
        case ActionTypes.HCPCSOPERATION_FAILED:
            return{...state, isLoading: false, errMess: action.payload}
        default:
            return state
    }
}

