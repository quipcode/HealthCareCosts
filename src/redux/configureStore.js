import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import {HealthCareCosts} from './healthcarecosts'
import {InitialFeedback} from './forms'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            healthcarecosts: HealthCareCosts,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }), applyMiddleware(thunk, logger)
    )
    return store
}