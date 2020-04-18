import * as ActionTypes from '../actions/ActionTypes'

const initialState = {
    errMess: null,
    userprofile: {},
    isLoading: false
}

export const UserProfile = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.USERPROFILE_LOADING:
            return{...state, isLoading: true, errMess: null, userprofile: {}}
        case ActionTypes.USERPROFILE_FAILED:
            return{...state, isLoading: false, errMess: action.payload }
        case ActionTypes.USERPROFILE_SUCCESS:
            return{...state, isLoading: false, errMess: null, userprofile: action.payload}
        default: 
            return state
    }
}