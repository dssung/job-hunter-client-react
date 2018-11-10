import React from 'react';
import {hot} from 'react-hot-loader';
import {Select, MenuItem, Button, Icon} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

class JobDetails extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let {company, position, location, status}  = this.props.job;
		
		return (
			<>
				<h3><b>{company}</b></h3>

				<Button 
					mini 
					variant = 'fab' 
					color = 'secondary' 
					aria-label = 'Edit'
					onClick = {this.props.handleEditClick}
				>
					<Icon><EditIcon/></Icon>
				</Button>

				<h5><b>{position}</b></h5>
				<h5><b>{location}</b></h5>

				<Select value = {status}>
					<MenuItem value = {'INTERESTED'}>Interested</MenuItem>
					<MenuItem value = {'APPLIED'}>Applied</MenuItem>
					<MenuItem value = {'IN_PROGRESS'}>In Progress</MenuItem>
					<MenuItem value = {'REJECTED'}>Rejected</MenuItem>
				</Select>
			</>
		);
	}
}

export default hot(module)(JobDetails);


