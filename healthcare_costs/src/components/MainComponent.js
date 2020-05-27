import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { Switch, Route, Redirect, withRouter  } from 'react-router-dom';
import {connect} from 'react-redux';
import { actions } from 'react-redux-form';
import {fetchHealthCareCosts, fetchHCPCSOperations, getUserProfile, patchUserProfile , fetchUSStates, postFeedback, fetchUserOperations, postUserOperations} from '../redux/actions/ActionCreators'

import POCSearch from './POC/POCSearch'
import SubmissionForm from './SubmitOperation'
import FeedbackForm from './FeedbackForm'
import POCTable from './POC/POCTable'
import MyProfilePage from './myprofile/MyProfilePage'
import NavBar from './navbar/NavBar'
import Register from './register/Register'
import PrivateRoute from './private-route/PrivateRoute'


const mapDispatchToProps = {
    fetchHealthCareCosts: () => (fetchHealthCareCosts()),
    fetchHCPCSOperations: () => (fetchHCPCSOperations()),
    fetchUSStates: () => (fetchUSStates()),
    fetchUserOperations : () => (fetchUserOperations()),
    getUserProfile : userId => (getUserProfile(userId)),
    patchUserProfile: (profile, userId) => (patchUserProfile(profile, userId)), 

    postFeedback : feedback => (postFeedback(feedback)),
    resetFeedbackForm: () => (actions.reset('feedback')),
    postUserOperations : useroperation => (postUserOperations(useroperation))
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
        userprofile: state.userprofile,
        useroperations: state.useroperations
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
        this.props.fetchUserOperations()
        // this.props.getUserProfile()
    }
    
    

    render(){
        
        //passes in what users selected to filter by on home page
        const POCTableComp = ({location}) => {
            return(
                <POCTable hcCosts={this.props.healthcarecosts} filterBy={location.operationstateProps} />
            )
        }
        const MyUserProfile = () =>{
            return (
                < MyProfilePage patchUserProfile={this.props.patchUserProfile} userId={this.props.auth.user.id} getUserProfile={this.props.getUserProfile} myprofile={this.props.userprofile.userprofile} states={this.props.usstates.USStates}></MyProfilePage>
            )
        }
        const MyFeedbackForm = () => {
            return(
                <FeedbackForm userId={this.props.auth.user.id} postFeedback={this.props.postFeedback}  resetFeedbackForm={this.props.resetFeedbackForm}/>
            )
        }

        const MySubmissionForm = () => {
            return(
                <SubmissionForm hcpcsoperations={this.props.hcpcsoperations.hcpcsoperations} states={this.props.usstates.USStates} user={this.props.auth.user} postUserOperations={this.props.postUserOperations}/>
            )
        }

        return(
            <div>
            <NavBar auth={this.props.auth}/>
            <TransitionGroup>
                <Switch>
                    <Route path='/pochealthcarecosts' component={POCTableComp}  />
                    <Route path='/pocsearch' render={() => <POCSearch props={this.props} />} />
                    <Route exact path="/register" component={Register} />
                    <PrivateRoute exact path="/submissionform" component={MySubmissionForm} />
                    <PrivateRoute exact path="/feedback" component={MyFeedbackForm} />
                    <PrivateRoute exact path="/myprofile" component={MyUserProfile} />
                    <Redirect to='/home' />
                </Switch>
            </TransitionGroup>
            </div>

        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))