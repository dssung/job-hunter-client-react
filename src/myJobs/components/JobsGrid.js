import React from 'react';
import {hot} from 'react-hot-loader';
import JobTile from './JobTile';
import AddJobTile from './AddJobTile';
import JobModal from './JobModal';
import '../style.scss';

class JobsGrid extends React.Component{

	//Renders all job panels
	renderTiles(){
        let tiles = [];
        let jobs = this.props.jobs;
        for (let i in jobs){
            let job = jobs[i];

            tiles.push(
                <JobTile
                    key = {i}
                    job = {job}
                    onClick = {this.props.onJobTileClick}
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
                open  = {this.props.jobModalIsOpen}/>
            />
            </>
		);  
	} 
}

export default hot(module)(JobsGrid);