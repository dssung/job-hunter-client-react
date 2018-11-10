import React from 'react';
import {Modal, CardHeader, CardActions, CardContent, Button, Card, TextField, MenuItem} from '@material-ui/core';
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
		
		this.setState({job: updateJob});
	}

	render(){
		let job = this.state.job;
		return (
			<>
				<Modal 
					open = {this.props.open}
					style = {{top: '20%', left: '5%', right: '5%', margin: 'auto', alignItems:'center', justifyContent: 'center'}}
				>			
					<Card>
						<CardHeader
							style = {{backgroundColor: '#3f51b5'}}
							title = {<div className = 'title'> Add New Job </div>}
						/>

						<CardContent>
							<div className = 'modal-body'>
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
							</div>
						</CardContent>

						<CardActions>
								<Button 
								variant='contained' 
								color='primary'
								className = 'modal-button'
								onClick = {() => this.props.handleAddClick(this.state.job, this.clearFields.bind(this))}
							>
							Add Job
							</Button>

							<Button 
									variant='contained' 
									color='secondary'
									className = 'modal-button'
									onClick = {() => this.props.handleCancelClick(this.clearFields.bind(this))}
								>
									Cancel
							</Button>
						</CardActions>
					</Card>
				</Modal>
			</>
		);
	}
}

export default hot(module)(AddModal);