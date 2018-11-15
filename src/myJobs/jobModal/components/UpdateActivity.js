import React from 'react';
import {hot} from 'react-hot-loader';
import moment from 'moment';
import {Card, CardContent, Button, CardActions,TextField, MenuItem} from '@material-ui/core';

class UpdateActivity extends React.Component {
	constructor(props){
		super(props);

		if (this.props.updateActivity){
			let activity = this.props.updateActivity[1];
			
			this.state = {
				header: 'Update Activity',
				updateLabel: 'Update',
				activity: {
					_id: activity._id,
					activity_type: activity.activity_type,
					date: activity.date,
					notes: activity.notes
				}
			}
		} else {
			this.state = {
				header: 'Add Activity',
				updateLabel: 'Add',
				activity: {
					activity_type: 'EMAIL_RECEIVED',
					date: Date.now(),
					notes: '',
				}
			}
		}
	}

	clearFields(){
		this.setState({
			activity: {
				activity_type: 'EMAIL_RECEIVED',
				date: Date.now(),
				notes: '',
			}
		});
	}

	handleUpdateClick(job, activity, clearFields){
		if (this.props.updateActivity){
			this.props.handleUpdateClick(job, activity, clearFields);
		} else {
			this.props.handleAddClick(job, activity, clearFields);
		}
	}
	
	handleChange(name){
		let newValue = event.target.value;

		if (name === 'activity_type')
			newValue = event.target.dataset.value;

		let updateActivity = this.state.activity;
		updateActivity[name] = newValue;
		
		this.setState({activity: updateActivity});
	}
	
	render(){
		let updateLabel = this.state.updateLabel;
		let header = this.state.header;
		let {activity_type, date, notes} = this.state.activity;
      return (
				<Card>
					<CardContent>
						<h3>{header}</h3>
						<div className = 'modal-body'>
							<TextField
								select
								label = 'Activity Type'
								margin = 'normal'
								value = {activity_type}
								onChange = {this.handleChange.bind(this, 'activity_type')}
							>
									<MenuItem value = {'EMAIL_RECEIVED'}>Email Received</MenuItem>
									<MenuItem value = {'PHONE_CALL'}>Phone Call</MenuItem>
									<MenuItem value = {'FOLLOWED_UP'}>Followed Up</MenuItem>
									<MenuItem value = {'PHONE_INTERVIEW'}>Phone Interview</MenuItem>
									<MenuItem value = {'ONSITE_INTERVIEW'}>Onsite Interview</MenuItem>
									<MenuItem value = {'OFFER'}>Offer</MenuItem>
							</TextField>

							<TextField
								label = 'Date'
								type = 'date'
								InputLabelProps={{ shrink: true }}
								value = {moment.utc(date).format('YYYY-MM-DD').toString()}
								onChange = {this.handleChange.bind(this, 'date')}
							/>
							
							<TextField
								multiline
								rows = {13}
								label = 'Notes'
								variant = 'outlined'
								margin = 'normal'
								value = {notes}
								onChange = {this.handleChange.bind(this, 'notes')}
							/>
						</div>
					</CardContent>

					<CardActions>
						<Button 
							variant = 'contained' 
							color = 'primary'
							className = 'modal-button'
							onClick = {() => this.handleUpdateClick(this.props.job, this.state.activity, this.clearFields.bind(this))}
						>
							{updateLabel}
						</Button>

						<Button 
							variant = 'contained' 
							color = 'secondary'
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

export default hot(module)(UpdateActivity);