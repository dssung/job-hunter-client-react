import React from "react";
import {hot} from "react-hot-loader";
import {Tabs, Tab, AppBar} from '@material-ui/core';
import MyJobsPage from '../myJobs/MyJobsPage/containers/MyJobsPage';
import IndeedJobsPage from '../indeedJobs/containers/IndeedJobsPage';
import './style.scss';

class App extends React.Component{

  constructor(props){
    super(props);
    
    this.state = {
      tabValue: 0
    }
  }

  handleChange(event, tabValue){
    this.setState({ tabValue });
  }

  render(){
    let {tabValue} = this.state;
    
    return (
      <div className = 'app'>
        <AppBar position="static">
          <Tabs value = {tabValue} onChange = {(event, value) => this.handleChange(event, value)}>
            <Tab value = {0} label = 'My Jobs'/>
            <Tab value = {1} label = 'Indeed Jobs'/>
          </Tabs>
        </AppBar>

        {tabValue === 0 && <MyJobsPage/>}
        {tabValue === 1 && <IndeedJobsPage/>}
      </div>
    );
  }
}

export default hot(module)(App);