import React from "react";
import {hot} from "react-hot-loader";
import {Card, CardActions, CardContent, Chip, Button, Snackbar, IconButton} from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import CalendarIcon from '@material-ui/icons/EventTwoTone';
import CloseIcon from '@material-ui/icons/Close';

class JobDetail extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      snackbarOpen: false
    }
  }

  openJobLink(url) {
		if (url){
			var win = window.open(url, '_blank');
			win.focus();
		}
  }

  handleClose(event, reason){
    if (reason === 'clickaway')
      return;
    
    this.setState({ snackbarOpen: false });
  }

  handleAddJobClick(job){
    this.props.handleAddJobClick(job)
    this.setState({ snackbarOpen: true });
  }

  render(){
    if (this.props.jobs[0]){
      return (
        <Card>
          <CardContent>
            <h2>{this.props.job.jobtitle}</h2>
            <h3>
              {this.props.job.company}
              <br/>
              {this.props.job.formattedLocation}
              <br/>
            </h3>
  
            <div className = 'chips-container'>
              <Chip
                color = 'secondary'
                variant = 'outlined'
                icon = {<CalendarIcon/>}
                className = 'chip'
                label = {this.props.job.formattedRelativeTime}
              />
              <Chip
                color = 'primary'
                variant = 'outlined'
                icon = {<LinkIcon/>}
                label = 'See Details'
                className = 'chip'
                onClick = {() => this.openJobLink(this.props.job.url)}
              />
            </div>
  
            <h5>Job Description</h5>
            <p>{this.props.job.snippet}</p>
          </CardContent>
          
          <CardActions>
            <Button
              variant = 'contained'
              color = 'primary'
              onClick = {() => this.handleAddJobClick(this.props.job)}
            >
              Add to My Jobs
            </Button>
          </CardActions>
          
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open = {this.state.snackbarOpen}
            onClose = {() => this.handleClose()}
            autoHideDuration = {2000}
            message = {<span>Job Added</span>}
            action = {[
              <IconButton
                key = 'close'
                aria-label = 'Close'
                onClick = {() => this.handleClose()}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
        </Card>
      );
    }
    return (<Card/>);
  }
}

export default hot(module)(JobDetail);