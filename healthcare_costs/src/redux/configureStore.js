import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { createForms } from 'react-redux-form';
// import {HealthCareCosts} from './reducers/healthcarecosts'
// import {UsersLogin} from './reducers/users'
// import {InitialFeedback, LoginForm} from './forms'
// import {USStates} from './reducers/usstates'
// import {HCPCSOperations} from './reducers/hcpcsoperation'
// import {authreducer} from './reducers/auth'
import rootReducer from './reducers'

export const ConfigureStore = () => {
    const store = createStore(
        rootReducer,
        // combineReducers({
        //     healthcarecosts: HealthCareCosts,
        //     usstates: USStates,
        //     hcpcsoperations : HCPCSOperations,
        //     logintoken: UsersLogin,
        //     auth: authreducer,
        //     ...createForms({
        //         feedbackForm: InitialFeedback,
        //         loginForm: LoginForm
        //     })
        // }), 
        applyMiddleware(thunk, logger)
    )
    return store
}