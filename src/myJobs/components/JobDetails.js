import React from 'react';
import {hot} from 'react-hot-loader';
import {CardContent, Select, MenuItem, Button, Icon} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

class JobDetails extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let {company, position, location, status}  = this.props.job;
		
		return (
			<CardContent>
				<div className = 'job-detail-header'>
					<h2>{company}</h2>
					<Button 
						mini 
						variant = 'fab' 
						color = 'secondary' 
						aria-label = 'Edit'
						className = 'edit-button'
						onClick = {this.props.handleEditClick}
					>
						<Icon><EditIcon/></Icon>
					</Button>
				</div>

				<div className = 'modal-body'>
					<p>
						{position}
						<br/>
						{location}
					</p>

					<br/>
					<br/>

					<Select 
						onChange = {() => this.props.handleSelectChange(this.props.job)} 
						value = {status}>
						<MenuItem value = {'INTERESTED'}>Interested</MenuItem>
						<MenuItem value = {'APPLIED'}>Applied</MenuItem>
						<MenuItem value = {'IN_PROGRESS'}>In Progress</MenuItem>
						<MenuItem value = {'REJECTED'}>Rejected</MenuItem>
					</Select>
				</div>

			</CardContent>
		);
	}
}

export default hot(module)(JobDetails);


