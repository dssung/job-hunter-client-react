import React from 'react';
import {hot} from 'react-hot-loader';
import moment from 'moment';
import {Card, CardContent, CardActionArea, Divider, Chip, Select, MenuItem} from '@material-ui/core';
import CalendarIcon from '@material-ui/icons/CalendarToday';

class JobTile extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let {company, location, position, created_date, status} = this.props.job;
		
		return (
			<>
				<Card 
					className = 'tile-body'
					onClick = {this.props.onClick}> 
					
					<CardContent>
						<h4 className = 'tile-title'>
							{company} 
						</h4>
						<i className = 'tile-subtitle'>{location}</i>
						<p>{position}</p>
					</CardContent>

					<CardActionArea
					style = {{backgroundColor: 'rgba(74, 94, 206, 0.4)'}}>
						<div className = 'tile-footer'>
							<h3>
								Last Activity 
							</h3>
						</div>
					</CardActionArea>
				</Card>
			</>
		);  
	}
}

export default hot(module)(JobTile);