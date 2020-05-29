import * as ActionTypes from '../actions/ActionTypes'

export const HealthCareCosts = (state = {
    isLoading: true,
    errMess: null,
    healthcarecosts: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_HEALTHCARECOST:
            return{...state, isLoading: false, errMess: null, healthcarecosts: action.payload}
        case ActionTypes.HEALTHCARECOST_LOADING:
            return{...state, isLoading: true, errMess: null, healthcarecosts: []}
        case ActionTypes.HEALTHCARECOST_FAILED:
            return {...state, isLoading:false, errMess: action.payload}
        default:
            return state
    }
}