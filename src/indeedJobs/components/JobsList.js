import React from "react";
import {hot} from "react-hot-loader";
import {List, ListItem, ListItemText, Divider, Button} from '@material-ui/core';

class JobsList extends React.Component{
  renderList(){
    let jobs = this.props.jobs;
    let listItems = [];

    if (jobs.length === 0)
      return <h2>No results found</h2>;

    for (let i in jobs){
      let job = jobs[i];

      listItems.push(
        <div key = {i}>
          <ListItem 
            button
            onClick = {() => this.props.handleClick(job)}
          >
            <ListItemText 
              primary = {job.jobtitle}
              secondary = {
                <>
                  {job.company}
                  <br/>
                  {job.formattedLocation}
                  <br/>
                  {job.formattedRelativeTime}
                </>
              }
            />
          </ListItem> 
          <Divider/>
        </div>
      );
    }

    listItems.push(
      <Button
        key = {10000}
        variant = 'contained'
        color = 'primary'
        className = 'show-more-button'
        onClick = {() => this.props.handleShowMoreClick(this.props.searchField)}
      >
        Show More
      </Button>
    );
    
    return listItems;
  }

  render(){
    return (
      <List>
        {this.renderList()}
      </List>
    );
  }
}

export default hot(module)(JobsList);