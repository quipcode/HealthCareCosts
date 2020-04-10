import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { actions } from 'react-redux-form';
import Home from './HomeComponent'
import Login from './Login/Login'
import {fetchHealthCareCosts, fetchHCPCSOperations, fetchUSStates, postLogin} from '../redux/ActionCreators'
import Header from './HeaderComponent';
import SubmissionForm from './SubmissionForm'
import ContactForm from './ContactForm'
import MyProfilePage from './MyProfilePage'




// import Editable from './search3'
import MyTable from './HealthCareCosts'

// import faker from 'faker'

const mapDispatchToProps = {
    fetchHealthCareCosts: () => (fetchHealthCareCosts()),
    fetchHCPCSOperations: () => (fetchHCPCSOperations()),
    fetchUSStates: () => (fetchUSStates()),
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
    postLogin: login => (postLogin(login)),
}

const mapStateToProps = state => {
    return {
        healthcarecosts: state.healthcarecosts,
        usstates: state.usstates,
        hcpcsoperations: state.hcpcsoperations
    }
}





// const data = 


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
    }

    render(){
        
        //passes in what users selected to filter by on home page
        const MyTableComp = ({location}) => {
            return(
                <MyTable hcCosts={this.props.healthcarecosts} filterBy={location.operationstateProps} />
            )
        }
        return(
            <div>
            <Header/>
            <TransitionGroup>
                
                    <Switch>
                       
                        {/* <Route path='/home' render={() => <Home healthcarecosts={this.props.healthcarecosts} />} /> */}
                     
                        <Route path='/home' render={() => <Home props={this.props} />} />
                        <Route path='/submissionform' render={() =>  <SubmissionForm resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
              
                        {/* <Route path='/healthcarecosts' render={() =>  <MyTable hcCosts={this.props.healthcarecosts} />} /> */}
                        <Route path='/healthcarecosts' component={MyTableComp}  />
                        <Route path='/contactus' render={() =>  <ContactForm/>} />
                        <Route path='/myprofile' component={MyProfilePage}/>
                        <Route path='/login' render={() =>  <Login postLogin={this.props.postLogin}/>} />
                        

 
                        <Redirect to='/home' />
                    </Switch>
                
            </TransitionGroup>
            </div>

        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))