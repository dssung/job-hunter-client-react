import React from 'react';
import {hot} from 'react-hot-loader';
import JobTile from './JobTile';
import AddJobTile from './AddJobTile';
import JobModal from './JobModal';
import '../style.scss';

class JobsGrid extends React.Component{
	renderTiles(){
		let tiles = [];
		let jobs = this.props.jobs;
		
		for (let i in jobs){
			let job = jobs[i];

			tiles.push(
				<JobTile
						key = {i}
						job = {job}
						onClick = {() => this.props.handleJobTileClick(job)}
				/>
			);
		}
		return tiles;
	}

	render(){
		return (
			<>
				<div className = 'my-jobs-container'>
						{this.renderTiles()}	
						<AddJobTile/>		
				</div>
				
				<JobModal
						job = {this.props.currJob}
						open  = {this.props.jobModalIsOpen}/>
				/>
			</>
		);  
	} 
}

export default hot(module)(JobsGrid);