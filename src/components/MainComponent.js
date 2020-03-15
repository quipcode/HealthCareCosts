import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Home from './HomeComponent'
import {fetchHealthCareCosts} from '../redux/ActionCreators'
import Header from './HeaderComponent';
import SearchResults from './SearchResults'
import HealthCareCosts from './HealthCareCosts'
// import faker from 'faker'

const mapDispatchToProps = {
    fetchHealthCareCosts: () => (fetchHealthCareCosts())
}

const mapStateToProps = state => {
    return {
        healthcarecosts: state.healthcarecosts
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

const data = generateData(1000);


class Main extends Component{
    
    componentDidMount(){
        this.props.fetchHealthCareCosts()
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
                        {/* <Route path='/home' component={HomePage} /> */}
                        <Route path='/home' render={() => <Home healthcarecosts={this.props.healthcarecosts} />} />
                        <Route path='/search' render={() => <SearchResults data={data} />} />
                        <Route path='/healthcarecosts' render={() => <HealthCareCosts healthcarecosts={this.props.healthcarecosts}/>} />

                        {/* <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
                        <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                        <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                        <Route exact path='/aboutus' render={() => <About partners={this.props.partners} />} /> */}
                        <Redirect to='/home' />
                    </Switch>
                
            </TransitionGroup>
            </div>

        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))