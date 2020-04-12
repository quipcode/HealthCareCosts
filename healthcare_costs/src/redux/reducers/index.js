import { combineReducers } from "redux";
import { createForms } from 'react-redux-form';
import authReducer from "./auth";
import {USStates} from './usstates'
import {HCPCSOperations} from './hcpcsoperation'
import {HealthCareCosts} from './healthcarecosts'
import {UsersLogin} from './users'
import {InitialFeedback, LoginForm} from '../forms'
// import errorReducer from "./errorReducer";



export default combineReducers({
  auth: authReducer,
  healthcarecosts: HealthCareCosts,
  usstates: USStates,
  hcpcsoperations : HCPCSOperations,
  logintoken: UsersLogin,
  ...createForms({
    feedbackForm: InitialFeedback,
    loginForm: LoginForm
    })
//   errors: errorReducer
});
