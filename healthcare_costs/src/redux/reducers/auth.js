import * as ActionTypes from '../actions/ActionTypes'

const isEmpty = require("is-empty");

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case ActionTypes.SET_CURRENT_USER:
            return{...state, isAuthenticated: !isEmpty(action.payload), user: action.payload}
        case ActionTypes.LOGIN_LOADING:
            return {...state, isLoading: true}
        default: 
            return state
    }
}