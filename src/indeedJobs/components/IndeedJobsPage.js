import React from "react";
import {hot} from "react-hot-loader";
import JobsList from './JobsList';
import JobDetails from '../containers/JobDetail';
import JobSearchBar from '../containers/JobSearchBar';
import ReactLoading from 'react-loading';
import '../styles.scss';

class IndeedJobsPage extends React.Component {
  renderList(){
    if (this.props.isLoading){
      return (
        <ReactLoading 
          className = 'loading-icon' 
          type = {'spin'} 
          color = {'#000000'}
        />
      );
    }

    return (
      <JobsList
        jobs = {this.props.jobs}
        searchField = {this.props.searchField}
        handleClick = {this.props.handleListItemClick}
        handleShowMoreClick = {this.props.handleShowMoreClick}
      />
    )
  }

  render(){
    return (
      <>
        <div className = 'search-bar'>
          <JobSearchBar/>
        </div>
        
        <div className = 'indeed-page-container'>
          <div className = 'overflow-list'>
            {this.renderList()}
          </div>
          
          <JobDetails job = {this.props.currJob}/>
        </div>
      </>
    );
  }
}

export default hot(module)(IndeedJobsPage);