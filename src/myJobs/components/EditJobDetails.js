import React from 'react';
import {hot} from 'react-hot-loader';
import {CardContent, CardActions, TextField, MenuItem, Button} from '@material-ui/core';

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
		let {company, position, location, notes, skills, applied_date, status, _id}  = this.state.job;

		return (
			<CardContent>
				<div className = 'modal-body'>
					<TextField
						label = 'Company'
						value = {company}
						margin = 'normal'
						onChange = {this.handleChange.bind(this, 'company')}
					/>

					<TextField
						label = 'Position'
						value = {position}
						margin = 'normal'
						onChange = {this.handleChange.bind(this, 'position')}
					/>

					<TextField
						label = 'Location'
						value = {location}
						margin = 'normal'
						onChange = {this.handleChange.bind(this, 'location')}
					/>

					<TextField
						multiline
						label = 'Notes'
						value = {notes}
						variant = 'outlined'
						margin = 'normal'
						rows = {3}
						onChange = {this.handleChange.bind(this, 'notes')}>
					</TextField>

					<TextField
						label = 'Skills'
						value = {skills}
						margin = 'normal'
						helperText = 'Separate by commas'
						onChange = {this.handleChange.bind(this, 'skills')}
					/>

					<TextField
						select
						label = 'Status'
						value = {status}
						margin = 'normal'
						onChange = {this.handleChange.bind(this, 'status')}
					>
						<MenuItem value = {'INTERESTED'}>Interested</MenuItem>
						<MenuItem value = {'APPLIED'}>Applied</MenuItem>
						<MenuItem value = {'IN_PROGRESS'}>In Progress</MenuItem>
						<MenuItem value = {'REJECTED'}>Rejected</MenuItem>
					</TextField>
				</div>

				<br/>

				<CardActions>
					<Button
						variant = 'contained' 
						color = 'primary'
						onClick = {() => this.props.handleSaveClick(_id, this.state.job)}
						className = 'modal-button'
					>
							Save
					</Button>

					<Button 
						className = 'editable-job-button'
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
						onClick = {() => this.props.handleDeleteClick(_id)}
						className = 'modal-button'
					>
						Delete
					</Button>
				</CardActions>
			</CardContent>
		);
	}
}

export default hot(module)(EditJobDetails);


