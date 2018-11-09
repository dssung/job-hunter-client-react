import React from 'react';
import {hot} from 'react-hot-loader';
import {Modal, Paper} from '@material-ui/core';
import JobDetails from '../containers/JobDetails';

class JobModal extends React.Component{
	render(){
		if (this.props.job !== null){	
			return (
				<Modal open = {this.props.open}>
					<Paper>
							<JobDetails job = {this.props.job}/>
					</Paper>
				</Modal>
			);
		}

		return <></>
	}
}

export default hot(module)(JobModal);