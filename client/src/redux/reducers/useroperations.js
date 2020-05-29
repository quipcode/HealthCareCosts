import * as ActionTypes from '../actions/ActionTypes'

export const UserOperations = (state = {
    isLoading: true,
    errMess: null,
    useroperations: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_USEROPERATION:
            return{...state, isLoading: false, errMess: null, useroperations: action.payload}
        case ActionTypes.USEROPERATION_LOADING:
            return{...state, isLoading: true, errMess: null, useroperations: []}
        case ActionTypes.USEROPERATION_FAILED:
            return{...state, isLoading: false, errMess: action.payload}
        default:
            return state
    }
}

