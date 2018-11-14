import React from 'react';
import {hot} from 'react-hot-loader';
import {CardContent, Select, MenuItem, Button, Icon, OutlinedInput, Chip, Divider} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

class JobDetails extends React.Component{
	constructor(props){
		super(props);
	}

	renderSkillChips(){
		let skills = this.props.job.skills;
		let skillChips = [];
		for (let i in skills){
			let chip = <Chip
									key = {i}
									className = 'chip'
									variant = 'outlined'
									color = 'primary'
									label= {skills[i]}
								/>
			skillChips.push(chip);
		}
		return skillChips;
	}

	render(){
		let {company, position, location, status, notes, link}  = this.props.job;
		
		return (
			<CardContent>
				<div className = 'job-detail-header'>
					<div>
						<h3>
							{company}
							<br/>
							<small>{position}</small><br/>
							<small className = 'location'><i>{location}</i></small>
						</h3>
					</div>
					<Button 
						mini 
						variant = 'fab' 
						color = 'secondary' 
						aria-label = 'Edit'
						className = 'header-button'
						onClick = {this.props.handleEditClick}
					>
						<Icon><EditIcon/></Icon>
					</Button>
				</div>

				<Divider/>

				<div className = 'modal-body'>
					<div className = 'notes'>
						<h4>Notes: </h4>
						<p>{notes}</p>
					</div>

					<br/>
					
					<div className = 'chips-container'>
						{this.renderSkillChips()}
					</div>
				
					<br/>

					<Select 
						onChange = {() => this.props.handleSelectChange(this.props.job)} 
						value = {status}
						input = {
              <OutlinedInput
                labelWidth = {0}
              />}
						>
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


