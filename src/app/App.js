import React, {PropTypes} from "react";
import {hot} from "react-hot-loader";
import JobsGrid from '../myJobs/containers/JobsGrid';
import Navbar from '../common/Navbar';
import './style.scss';

class App extends React.Component{
  render(){
    return (
      <div className = 'app'>
        <Navbar/>
        <JobsGrid/>
      </div>
    );
  }
}

export default hot(module)(App);