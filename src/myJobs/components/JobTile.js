import React from 'react';
import {hot} from 'react-hot-loader';
import moment from 'moment';
import {Card, CardContent, CardActions, Chip} from '@material-ui/core';
import CalendarIcon from '@material-ui/icons/CalendarToday';

class JobTile extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let {company, location, position, created_date, status} = this.props.job;
		
		return (
			<>
				<Card onClick = {this.props.onClick}> 
					<CardContent>
						<h4>{company}</h4>
						<p>{position}</p>
						<p>{location}</p>
						<p>{status}</p>
					</CardContent>

					<CardActions>
						<Chip
							label = {moment(created_date).format('DD MMM')}
							icon = {<CalendarIcon/>}
						/>
					</CardActions>
				</Card>
			</>
		);  
	}
}

export default hot(module)(JobTile);