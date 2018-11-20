import React from "react";
import {hot} from "react-hot-loader";
import JobsList from './JobsList';
import JobDetails from '../containers/JobDetail';
import JobSearchBar from '../containers/JobSearchBar';
import '../styles.scss';

class IndeedJobsPage extends React.Component {
  render(){
    return (
      <>
        <div className = 'search-bar'>
          <JobSearchBar/>
        </div>
        
        <div className = 'indeed-page-container'>
          <div className = 'overflow-list'>
            <JobsList
              jobs = {this.props.jobs}
              handleClick = {this.props.handleListItemClick}
            />
          </div>
          
          <JobDetails job = {this.props.currJob}/>
        </div>
      </>
    );
  }
}

export default hot(module)(IndeedJobsPage);