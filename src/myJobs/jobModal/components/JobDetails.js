import React from 'react';
import {hot} from 'react-hot-loader';
import moment from 'moment';
import {CardContent, Paper, Button, Chip} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CalendarIcon from '@material-ui/icons/EventTwoTone'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import LinkIcon from '@material-ui/icons/Link'


class JobDetails extends React.Component{
	constructor(props){
		super(props);
	}

	formatStatusType(str){
    str = str.replace(/_/, ' ').toLowerCase().split(' ');

    for (let i in str) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);     
    }

    return str.join(' '); 
	}
	
	openJobLink(url) {
		if (url){
			var win = window.open(url, '_blank');
			win.focus();
		}
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

	renderAppliedOnLabel(applied_date){
		if (applied_date){
			return 'Applied on ' + moment.utc(applied_date).format('YYYY-MM-DD').toString();
		} else {
			return 'Not Applied'
		}
	}

	render(){
		let {company, position, location, status, notes, applied_date, url}  = this.props.job;
		
		return (
			<Paper>
			<CardContent>
				<div className = 'modal-section-header'>
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
						className = 'modal-header-button'
						onClick = {this.props.handleEditClick}
					>
						<EditIcon/>
					</Button>
				</div>

				<div className = 'modal-body'>
					<div className = 'chips-container'>
						<Chip
							variant = 'outlined'
							icon = {<InfoIcon/>}
							className = 'chip'
							label = {this.formatStatusType(status)}
						/>

						<Chip
							color = 'secondary'
							variant = 'outlined'
							icon = {<CalendarIcon/>}
							className = 'chip'
							label = {this.renderAppliedOnLabel(applied_date)}	
						/>

						<Chip
							color = 'primary'
							variant = 'outlined'
							icon = {<LinkIcon/>}
							className = 'chip'
							label = {url ? 'More Info': 'Missing URL'}
							onClick = {() => this.openJobLink(url)}
						/>
					</div>
					
					<div className = 'modal-section-notes'>
						<h4>Notes:</h4>
						<p>{notes}</p>
					</div>

					<br/>
					
					<div className = 'chips-container'>
						{this.renderSkillChips()}
					</div>
				</div>
			</CardContent>
			</Paper>
		);
	}
}

export default hot(module)(JobDetails);


