import * as ActionTypes from './ActionTypes'

export const USStates = (state = {
    isLoading: true,
    errMess: null,
    USStates: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_USSTATES:
            return{...state, isLoading: false, errMess: null, USStates: action.payload}
        case ActionTypes.USSTATES_LOADING:
            return{...state, isLoading: true, errMess: null, USStates: []}
        case ActionTypes.USSTATES_FAILED:
            return {...state, isLoading:false, errMess: action.payload}
        default:
            return state
    }
}