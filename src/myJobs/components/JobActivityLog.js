import React from 'react';
import {hot} from 'react-hot-loader';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions, CardContent, Button, Chip, Avatar, IconButton, Tooltip} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import UpdateActivity from '../containers/UpdateActivity';

class JobModal extends React.Component {

  formatActivityType(str){
    str = str.replace(/_/, ' ');
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);     
    }

    return str.join(' '); 
  }

  renderActivityLog(){
    let job = this.props.job;
    let activityLog = job.activity_log.sort((a,b)=>{
      return a.date - b.date
    });
    let panels = [];
    for (let i in activityLog){
      panels.push(
        <ExpansionPanel key = {i}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <p><b>{this.formatActivityType(activityLog[i].activity_type)}</b> on {moment(activityLog[i].date).format('MM-DD-YY')}</p>     
          </ExpansionPanelSummary>
          
          <ExpansionPanelDetails>
              <div className = 'notes'>
                <p>{activityLog[i].notes}</p>
              </div>            
          </ExpansionPanelDetails>

          <ExpansionPanelActions>
            <Button 
              onClick = {() => this.props.handleEditClick(job, activityLog[i])}
              size="small">
              Edit
            </Button>
            <Button 
              onClick = {() => this.props.handleDeleteClick(job, activityLog[i])}
              size="small">Delete</Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      );
    }

    return panels;
  }
	
	render(){    
    if (this.props.updateActivityIsOpen){
      return( <UpdateActivity/> )
    }
    
    return (
        <CardContent>
          <div className = 'job-detail-header'>
						<h3> Activity Log </h3>
            <Button 
              mini
              variant = 'fab' 
              color = 'primary' 
              aria-label = 'Add'
              className = 'edit-button'
              onClick = {this.props.handleAddClick}
            >
              <AddIcon/>
            </Button>
				  </div>
          
          <div className = 'activity-log-body'>
            {this.renderActivityLog()}
          </div>
        </CardContent>
      );
    }
  }

export default hot(module)(JobModal);