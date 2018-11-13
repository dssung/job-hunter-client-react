import React from 'react';
import {hot} from 'react-hot-loader';
import {Card, CardContent, Button, Icon, CardActions,TextField, MenuItem} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

class AddActivity extends React.Component {
	constructor(props){
		super(props);
		this.state = {
				activity: {
						activity_type: 'EMAIL',
						date: '',
						notes: '',
					}
		}
	}

	clearFields(){
		this.setState({
			activity: {
				activity_type: 'EMAIL',
				date: '',
				notes: '',
			}
		});
	}
	
	handleChange(name){
		let newValue = event.target.value;

		if (name === 'activity_type')
			newValue = event.target.dataset.value;

		let updateActivity = this.state.activity;
		updateActivity[name] = newValue;
		
		this.setState({
			activity: updateActivity
		});
	}
	
  
	render(){
    let {activity_type, date, notes} = this.state.activity;
      return (
          <Card>
						
						<CardContent>
							<h3>Add Activity</h3>
							<div className = 'modal-body'>
                <TextField
									select
									label = 'Activity Type'
                  margin = 'normal'
									value = {activity_type}
									onChange = {this.handleChange.bind(this, 'activity_type')}
								>
										<MenuItem value = {'EMAIL'}>Email</MenuItem>
										<MenuItem value = {'PHONE_CALL'}>Phone Call</MenuItem>
										<MenuItem value = {'PHONE_INTERVIEW'}>Phone Interview</MenuItem>
										<MenuItem value = {'ONSITE_INTERVIEW'}>Onsite Interview</MenuItem>
								</TextField>

								<TextField
									label = 'Date'
									type = 'date'
									value = {this.date}
									InputLabelProps={{
										shrink: true,
									}}
								/>
								
                <TextField
									multiline
									label = 'Notes'
									variant="outlined"
									margin = 'normal'
									rows = {3}
									value = {notes}
									onChange = {this.handleChange.bind(this, 'notes')}
								>
								</TextField>
							</div>
						</CardContent>

						<CardActions>
								<Button 
								variant='contained' 
								color='primary'
								className = 'modal-button'
								onClick = {() => this.props.handleAddClick(this.state.activity, this.props.job, this.clearFields.bind(this))}
							>
							Add
							</Button>

							<Button 
									variant='contained' 
									color='secondary'
									className = 'modal-button'
									onClick = {this.props.handleCancelClick}
								>
									Cancel
							</Button>
						</CardActions>
					</Card>
      )
    }
	}


export default hot(module)(AddActivity);