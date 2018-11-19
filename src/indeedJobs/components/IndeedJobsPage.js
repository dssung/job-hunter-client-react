import React from "react";
import {hot} from "react-hot-loader";
import JobsList from './JobsList';
import JobDetails from './JobDetail';
import '../styles.scss';

class IndeedJobsPage extends React.Component{

  render(){
    return (
      <div className = 'indeed-page-container'>
        <JobsList/>
        <JobDetails/>
      </div>
    );
  }
}



export default hot(module)(IndeedJobsPage);