import React from 'react';
import {hot} from 'react-hot-loader';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, CardContent, Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import AddActivity from '../containers/AddActivity';

class JobModal extends React.Component {

  renderActivityLog(){
    let activityLog = this.props.job.activity_log.reverse();
    let panels = [];
    for (let i in activityLog){
      panels.push(
        <ExpansionPanel
          key = {i}
        >
          <ExpansionPanelSummary 
            expandIcon={<ExpandMoreIcon/>}
          >
            {activityLog[i].activity_type} on {activityLog[i].date}
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            {activityLog[i].notes}
          </ExpansionPanelDetails>

        </ExpansionPanel>
      );
    }

    return panels;
  }
	
	render(){

    let activityLog = this.props.job.activity_log;
    console.log(activityLog);
    
    if (this.props.addActivityIsOpen){
      return(
        <AddActivity/>
      )
    }

    if (activityLog.length !== 0){
      return (
        <>
        <CardContent>
          <h3>Activity Log</h3>

          {this.renderActivityLog()}

          <Button 
            mini variant='fab' 
            color='primary' 
            aria-label='Add'
            onClick = {this.props.handleAddClick}
          >
            <AddIcon/>
          </Button>
        </CardContent>
        </>
      );
    } else {
      return (
        <CardContent>
          <div className = 'job-detail-header'>
              <h3>Activity Log</h3>
				  </div>
          <Button 
            mini variant='fab' 
            color='primary' 
            aria-label='Add'
            onClick = {this.props.handleAddClick}
          >
            <AddIcon/>
          </Button>
        
        </CardContent>
      )
    }
			
	}
}

export default hot(module)(JobModal);