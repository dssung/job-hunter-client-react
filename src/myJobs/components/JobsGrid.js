import React from 'react';
import {hot} from 'react-hot-loader';
import JobTile from './JobTile';
import AddJobTile from './AddJobTile';
import JobModal from './JobModal';
import AddModal from '../containers/AddModal';
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
						<AddJobTile
							onClick = {this.props.handleAddTileClick}
						/>		
				</div>
				
				<JobModal
						job = {this.props.currJob}
						open  = {this.props.jobModalIsOpen}
				/>
			
				
				<AddModal
					open = {this.props.addModalIsOpen}/>
			</>
		);  
	} 
}

export default hot(module)(JobsGrid);