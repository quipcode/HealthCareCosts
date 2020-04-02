import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import {HealthCareCosts} from './healthcarecosts'
import {InitialFeedback} from './forms'
import {USStates} from './usstates'
import {HCPCSOperations} from './hcpcsoperation'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            healthcarecosts: HealthCareCosts,
            usstates: USStates,
            hcpcsoperation : HCPCSOperations,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }), applyMiddleware(thunk, logger)
    )
    return store
}