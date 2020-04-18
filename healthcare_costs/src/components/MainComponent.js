import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { Switch, Route, Redirect, withRouter  } from 'react-router-dom';
import {connect} from 'react-redux';
import { actions } from 'react-redux-form';
import Home from './HomeComponent'
import Login from './Login/Login'
// import jwt_decode from "jwt-decode";
import {fetchHealthCareCosts, fetchHCPCSOperations, getUserProfile, patchUserProfile , fetchUSStates, loginUser} from '../redux/actions/ActionCreators'
// import {loginUser, postLogin} from '../redux/actions/ActionCreators'
import Header from './HeaderComponent';
import SubmissionForm from './SubmissionForm'
import ContactForm from './ContactForm'
import MyProfilePage from './MyProfilePage'
import NavBar from './navbar/NavBar'
import Register from './register/Register'
import PrivateRoute from './private-route/PrivateRoute'

// import Register fr
// import {setCurrentUser} from '../redux/actions/ActionCreators'


// if(localStorage.jwtToken){
//     const token = localStorage.jwtToken
//     setAuthToken(token)
//     const decoded = jwt_decode(token)
//     store.dispatch(setCurrentUser(decoded));
//     const currentTime = Date.now() / 1000
//     // if(decoded.exp < currentTime){
//     //     store.dispatch
//     // }
// }

// import Editable from './search3'
import MyTable from './HealthCareCosts'
// import setAuthToken from '../utils/setAuthToken';

// import faker from 'faker'

const mapDispatchToProps = {
    fetchHealthCareCosts: () => (fetchHealthCareCosts()),
    fetchHCPCSOperations: () => (fetchHCPCSOperations()),
    fetchUSStates: () => (fetchUSStates()),
    // resetFeedbackForm: () => (actions.reset('feedbackForm')),
    patchUserProfile: profile => (patchUserProfile(profile)),
    getUserProfile : userId => (getUserProfile(userId))
    
    // loginUser: () => (loginUser())
    // postLogin: login => (postLogin(login)),
}

const mapStateToProps = state => {
    return {
        healthcarecosts: state.healthcarecosts,
        usstates: state.usstates,
        hcpcsoperations: state.hcpcsoperations,
        logintoken: state.logintoken,
        auth: state.auth,
        userprofile: state.userprofile
    }
}


class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: this.props.healthcarecosts
        }
    }
    componentDidMount(){
        this.props.fetchHealthCareCosts()
        this.props.fetchHCPCSOperations()
        this.props.fetchUSStates()
        // this.props.getUserProfile()
    }
    
    

    render(){
        
        //passes in what users selected to filter by on home page
        const MyTableComp = ({location}) => {
            return(
                <MyTable hcCosts={this.props.healthcarecosts} filterBy={location.operationstateProps} />
            )
        }
        const MyUserProfile = () =>{
            return (
                < MyProfilePage patchUserProfile={this.props.patchUserProfile} userId={this.props.auth.user.id} getUserProfile={this.props.getUserProfile} ></MyProfilePage>
            )
        }
        return(
            <div>
            <NavBar auth={this.props.auth}/>
            {/* <Header/> */}
            <TransitionGroup>
                    
                <Switch>
                    {/* <Route path='/home' render={() => <Home healthcarecosts={this.props.healthcarecosts} />} /> */}
                    <Route path='/healthcarecosts' component={MyTableComp}  />
                    <Route path='/home' render={() => <Home props={this.props} />} />
                    {/* <Route exact path="/login" component={Login} /> */}
                    <Route exact path="/register" component={Register} />
                    {/* <PublicRoute exact path="/healthcarecosts" component={() => MyTableComp}/> */}
                    {/* <PublicRoute exact path="/home" component={() => <Home props={this.props} />}/> */}
                    {/* <PublicRoute exact path="/healthcarecosts" component={MyTableComp}/> */}
                    {/* <Route path='/healthcarecosts' render={() =>  <MyTable hcCosts={this.props.healthcarecosts} />} /> */}                
                    {/* <Route path='/submissionform' render={() =>  <SubmissionForm resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
                    <Route path='/contactus' render={() =>  <ContactForm/>} />
                    <Route path='/myprofile' component={MyProfilePage}/> */}
                    {/* <Route path='/login' render={() =>  <Login/>} /> */}
                    {/* <Redirect to='/home' /> */}
                {/* </Switch> */}
                {/* <Switch> */}
                    <PrivateRoute exact path="/submissionform" component={SubmissionForm} />
                    <PrivateRoute exact path="/contactus" component={ContactForm} />
                    <PrivateRoute exact path="/myprofile" component={MyUserProfile} />
                    <Redirect to='/home' />
                </Switch>
                            
            </TransitionGroup>
            </div>

        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))