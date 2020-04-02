import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './HomeComponent'
import {fetchHealthCareCosts, fetchHCPCSOperations, fetchUSStates} from '../redux/ActionCreators'
import Header from './HeaderComponent';
import SubmissionForm from './SubmissionForm'
import ContactForm from './ContactForm'





// import Editable from './search3'
import MyTable from './HealthCareCosts'

// import faker from 'faker'

const mapDispatchToProps = {
    fetchHealthCareCosts: () => (fetchHealthCareCosts()),
    fetchHCPCSOperations: () => (fetchHCPCSOperations()),
    fetchUSStates: () => (fetchUSStates())
}

const mapStateToProps = state => {
    return {
        healthcarecosts: state.healthcarecosts,
        usstates: state.usstates,
        hcpcsoperation: state.hcpcsoperation
    }
}

const faker = require('faker');

const generateData = (count = 1000) => {
  let data = [];

  for( let i = 0; i < count; i++) {
    data.push({
      name: faker.name.findName(),
      email: faker.internet.email()
    })
  }

  return data;
}

const data = generateData(10);
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
        const HomePage = ()=>{
            return(
                <Home healthcarecosts={this.props.healthcarecosts}/>
            )
        }
        return(
            <div>
            <Header/>
            <TransitionGroup>
                
                    <Switch>
                       
                        {/* <Route path='/home' render={() => <Home healthcarecosts={this.props.healthcarecosts} />} /> */}
                     
                        <Route path='/home' render={() => <Home props={this.props} />} />
                        <Route path='/submissionform' render={() =>  <SubmissionForm/>} />
              
                        <Route path='/healthcarecosts' render={() =>  <MyTable hcCosts={this.props.healthcarecosts} />} />
                        <Route path='/contactus' render={() =>  <ContactForm/>} />
                        
                        

 
                        <Redirect to='/home' />
                    </Switch>
                
            </TransitionGroup>
            </div>

        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))