import React from 'react';
import {Modal, Button, Paper, TextField, MenuItem} from '@material-ui/core';
import {hot} from 'react-hot-loader';

class AddModal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
				job: {
						company: '',
						position: '',
						location: '',
						status: 'INTERESTED'
					}
		}
	}

	clearFields(){
		this.setState({
			job: {
					company: '',
					position: '',
					location: '',
					status: 'INTERESTED'
			}
		});
	}

	handleChange(name){
		let newValue = event.target.value;

		if (name === 'status')
			newValue = event.target.dataset.value;

		let updateJob = this.state.job;
		updateJob[name] = newValue;
		
		this.setState({
			job: updateJob
		});
	}

	render(){
		let job = this.state.job;
		return (
			<>
				<Modal open = {this.props.open}>
					<Paper>
						<h2>
							Add New Job
						</h2>

						<TextField
							label = 'Company'
							margin = 'normal'
							value = {job.company}
							onChange = {this.handleChange.bind(this, 'company')}
						/>

						<TextField
							label = 'Position'
							margin = 'normal'
							value = {job.position}
							onChange = {this.handleChange.bind(this, 'position')}
						/>

						<TextField
							label = 'Location'
							margin = 'normal'
							value = {job.location}
							onChange = {this.handleChange.bind(this, 'location')}
						/>

						<TextField
							select
							label='Status'
							margin='normal'
							value = {job.status}
							onChange = {this.handleChange.bind(this, 'status')}
						>
								<MenuItem value = {'INTERESTED'}>Interested</MenuItem>
								<MenuItem value = {'APPLIED'}>Applied</MenuItem>
								<MenuItem value = {'IN_PROGRESS'}>In Progress</MenuItem>
								<MenuItem value = {'REJECTED'}>Rejected</MenuItem>
						</TextField>

						<Button 
							variant='contained' 
							color='primary'
							onClick = {() => this.props.handleAddClick(this.state.job, this.clearFields.bind(this))}
						>
							Add Job
						</Button>

						<Button 
							variant='contained' 
							color='secondary'
							onClick = {() => this.props.handleCancelClick(this.clearFields.bind(this))}
						>
							Cancel
						</Button>
					</Paper>
				</Modal>
			</>
		);
	}
}

export default hot(module)(AddModal);