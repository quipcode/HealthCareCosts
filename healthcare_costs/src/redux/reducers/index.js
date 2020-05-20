import { combineReducers } from "redux";
import { createForms } from 'react-redux-form';
import authReducer from "./auth";
import {USStates} from './usstates'
import {HCPCSOperations} from './hcpcsoperation'
import {HealthCareCosts} from './healthcarecosts'
import {UsersLogin} from './users'
import {InitialFeedback, LoginForm, MyUserProfile} from '../forms'
import {UserProfile} from './userprofile'
import {UserOperations} from './useroperations'
// import errorReducer from "./errorReducer";



export default combineReducers({
  userprofile : UserProfile,
  auth: authReducer,
  healthcarecosts: HealthCareCosts,
  usstates: USStates,
  hcpcsoperations : HCPCSOperations,
  logintoken: UsersLogin,
  useroperations: UserOperations,
  ...createForms({
    feedback: InitialFeedback,
    loginForm: LoginForm,
    myuserprofile: MyUserProfile
    })
//   errors: errorReducer
});
