import React from "react";
import {hot} from "react-hot-loader";
import MyJobsPage from '../myJobs/MyJobsPage/containers/MyJobsPage';
import IndeedJobsPage from '../indeedJobs/containers/IndeedJobsPage';
import Navbar from '../common/Navbar';
import './style.scss';

class App extends React.Component{
  render(){
    return (
      <div className = 'app'>
        <Navbar/>
        {/*<IndeedJobsPage/>*/}
        <MyJobsPage/>
      </div>
    );
  }
}

export default hot(module)(App);