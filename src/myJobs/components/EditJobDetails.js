import React from 'react';
import {hot} from 'react-hot-loader';
import moment from 'moment';
import {CardContent, CardActions, TextField, MenuItem, Button, Paper} from '@material-ui/core';

class EditJobDetails extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			job: Object.assign({}, this.props.job)
		}
	}

	handleChange(name){
		let newValue = event.target.value;

		if (name === 'status')
			newValue = event.target.dataset.value;

		if (name === 'skills'){
			newValue = event.target.value.split(',');
		}

		let updateJob = this.state.job;
		updateJob[name] = newValue;

		this.setState({job: updateJob});
	}

	render(){
		let {company, position, location, notes, skills, applied_date, status, _id, url}  = this.state.job;

		return (
			<Paper>
				<CardContent>
					<div className = 'modal-body'>
						<div className = 'input-row'>
							<TextField
									select
									label = 'Status'
									className = 'input-row-field'
									margin = 'dense'
									value = {status}
									onChange = {this.handleChange.bind(this, 'status')}
								>
									<MenuItem value = {'INTERESTED'}>Interested</MenuItem>
									<MenuItem value = {'APPLIED'}>Applied</MenuItem>
									<MenuItem value = {'IN_PROGRESS'}>In Progress</MenuItem>
									<MenuItem value = {'REJECTED'}>Rejected</MenuItem>
								</TextField>

								<TextField
									label = 'Date Applied'
									type = 'date'
									className = 'input-row-field'
									margin = 'dense'
									InputLabelProps={{
										shrink: true,
									}}
									value = {moment.utc(applied_date).format('YYYY-MM-DD').toString()}
									onChange = {this.handleChange.bind(this, 'applied_date')}
								/>
							</div>
						
							<TextField
								label = 'Company'
								className = 'sm-input-field'
								margin = 'dense'
								value = {company}
								onChange = {this.handleChange.bind(this, 'company')}
							/>

							<TextField
								label = 'Position'
								className = 'sm-input-field'
								margin = 'dense'
								value = {position}
								onChange = {this.handleChange.bind(this, 'position')}
							/>

							<TextField
								label = 'Location'
								className = 'sm-input-field'
								margin = 'dense'
								value = {location}
								onChange = {this.handleChange.bind(this, 'location')}
							/>

							<TextField
								label = 'Job Description URL'
								className = 'lg-input-field'
								margin = 'dense'
								helperText = 'Include https://'
								value = {url}
								onChange = {this.handleChange.bind(this, 'url')}
							/>

							<TextField
								multiline
								label = 'Notes'
								variant = 'outlined'
								margin = 'normal'
								rows = {3}
								value = {notes}
								onChange = {this.handleChange.bind(this, 'notes')}>
							</TextField>
									
							<TextField
								label = 'Skills'
								className = 'lg-input-field'
								margin = 'dense'
								helperText = 'Separate by commas'
								value = {skills}
								onChange = {this.handleChange.bind(this, 'skills')}
							/>
					</div>

					<br/>

					<CardActions>
						<Button
							variant = 'contained' 
							color = 'primary'
							className = 'modal-button'
							onClick = {() => this.props.handleSaveClick(_id, this.state.job)}	
						>
							Save
						</Button>

						<Button 
							variant = 'contained' 
							color = 'secondary'
							className = 'modal-button'
							onClick = {this.props.handleCloseClick}
						>
							Cancel
						</Button>

						<Button
							variant = 'outlined' 
							color = 'secondary'
							className = 'modal-button'
							onClick = {() => this.props.handleDeleteClick(_id)}
						>
							Delete
						</Button>
					</CardActions>
				</CardContent>
			</Paper>
		);
	}
}

export default hot(module)(EditJobDetails);


