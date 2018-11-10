import React from 'react';
import {hot} from 'react-hot-loader';
import {Modal, Paper, Button, Icon} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import JobDetails from '../containers/JobDetails';
import EditJobDetails from '../containers/EditJobDetails';

class JobModal extends React.Component {
	renderJobDetails(){
		if (this.props.editJobDetailsIsOpen){
			return <EditJobDetails job = {this.props.job}/>
		} else {
			return (
				<JobDetails job = {this.props.job}/>
			)
		}
	}
	
	render(){
		if (this.props.job !== null){	
			return (
				<Modal open = {this.props.open}>
					<Paper>
						{this.renderJobDetails()}
						<Button 
							mini 
							variant = 'fab' 
							color = 'secondary' 
							aria-label = 'Close'
							onClick = {this.props.handleCloseClick}
						>
						<Icon><ClearIcon/></Icon>
				</Button>
					</Paper>
				</Modal>
			);
		}
		return <></>
	}
}

export default hot(module)(JobModal);