import React from 'react';
import {hot} from 'react-hot-loader';
import moment from 'moment';
import {  ExpansionPanel, 
          ExpansionPanelSummary, 
          ExpansionPanelDetails, 
          ExpansionPanelActions, 
          Divider,
          CardContent, 
          Button
        } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import UpdateActivity from '../containers/UpdateActivity';

class JobActivityLog extends React.Component {

  formatActivityType(str){
    str = str.replace(/_/, ' ').toLowerCase().split(' ');

    for (let i in str) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);     
    }

    return str.join(' '); 
  }

  renderActivityLog(){
    let panels = [];
    let job = this.props.job;
    let activityLog = job.activity_log.sort((a,b)=>{return new Date(b.date) - new Date(a.date)});

    for (let i in activityLog){
      let activity = activityLog[i];
      panels.push(
        <ExpansionPanel key = {i}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <p>
              <b>{this.formatActivityType(activity.activity_type)}</b> on {moment.utc(activity.date).format('MM-DD-YY')}
            </p>     
          </ExpansionPanelSummary>
          
          <ExpansionPanelDetails>
              <div className = 'notes'>
                <p>{activity.notes}</p>
              </div>            
          </ExpansionPanelDetails>

          <ExpansionPanelActions>
            <Button 
              onClick = {() => this.props.handleEditClick(job, activity)}
              size="small"
            >
              Edit
            </Button>
            <Button 
              onClick = {() => this.props.handleDeleteClick(job, activity)}
              size="small"
            >
              Delete
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      );
    }
    return panels;
  }
	
	render(){    
    if (this.props.updateActivityIsOpen){
      return ( <UpdateActivity/> );
    }
    
    return (
        <CardContent>
          <div className = 'modal-section-header'>
						<h3>Activity Log</h3>
            <Button 
              mini
              variant = 'fab' 
              color = 'primary' 
              aria-label = 'Add'
              className = 'modal-header-button'
              onClick = {this.props.handleAddClick}
            >
              <AddIcon/>
            </Button>
				  </div>

          <Divider/>
          
          <div className = 'overflow-list'>
            {this.renderActivityLog()}
          </div>
        </CardContent>
    );
  }
}

export default hot(module)(JobActivityLog);