import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import {HealthCareCosts} from './healthcarecosts'
import {UsersLogin} from './users'
import {InitialFeedback, LoginForm} from './forms'
import {USStates} from './usstates'
import {HCPCSOperations} from './hcpcsoperation'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            healthcarecosts: HealthCareCosts,
            usstates: USStates,
            hcpcsoperations : HCPCSOperations,
            logintoken: UsersLogin,
            ...createForms({
                feedbackForm: InitialFeedback,
                loginForm: LoginForm
            })
        }), applyMiddleware(thunk, logger)
    )
    return store
}