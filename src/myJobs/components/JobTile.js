import React from 'react';
import {hot} from 'react-hot-loader';
import moment from 'moment';
import {Card, CardContent, CardActionArea} from '@material-ui/core';

class JobTile extends React.Component{
	constructor(props){
		super(props);
	}

	formatActivityType(str){
    str = str.replace(/_/, ' ').toLowerCase().split(' ');

    for (let i in str) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);     
    }

    return str.join(' '); 
  }

	renderFooter(){
		let {activity_log , applied_date, status} = this.props.job;
		let lastActivity = activity_log.sort((a,b)=>{return new Date(b.date) - new Date(a.date)})[0];
		let label = (<h3>Interested</h3>)
		let style = {
			borderColor: 'white',
			backgroundColor: '#72919b'};
		
		if (status === 'REJECTED'){
			label = <h3>Rejected</h3>
			style.backgroundColor = '#b25954';
		
		} else if (lastActivity){
			label = (<h3>{this.formatActivityType(lastActivity.activity_type)}: <small>{moment.utc(lastActivity.date).format('MM-DD-YY')}</small></h3>)
			style.backgroundColor = '#dd8f00';
			
			if (lastActivity.activity_type === 'OFFER')
				style.backgroundColor = '#66b267';
			
		} else if (applied_date){
			label = (<h3>Applied: <small>{moment.utc(applied_date).format('MM-DD-YY')}</small></h3>)
			style.backgroundColor = '#259cc4';
		}

		return (
			<CardActionArea style = {style}>
				<div className = 'tile-footer'>
					{label}
				</div>
			</CardActionArea>
		);
	}

	render(){
		let {company, location, position} = this.props.job;
		return (
			<>
				<Card 
					className = 'tile-body'
					onClick = {this.props.onClick}
				> 
					
					<CardContent>
						<h4 className = 'tile-title'>
							{company} 
						</h4>
						<i className = 'tile-subtitle'>
							{location}
						</i>
						<p>{position}</p>
					</CardContent>

					{this.renderFooter()}
				</Card>
			</>
		);  
	}
}

export default hot(module)(JobTile);