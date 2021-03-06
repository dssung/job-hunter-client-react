import React from 'react';
import {hot} from 'react-hot-loader';
import {Modal, Card, CardHeader, Button, Icon} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import JobDetails from '../containers/JobDetails';
import EditJobDetails from '../containers/EditJobDetails';
import JobActivityLog from '../containers/JobActivityLog';

class JobModal extends React.Component {
	
	renderJobDetails(){
		if (this.props.editJobDetailsIsOpen){
			return <EditJobDetails job = {this.props.job}/>
		}
		
		return <JobDetails job = {this.props.job}/>
	}
	
	render(){
		if (this.props.job !== null){	
			return (
				<Modal 
					open = {this.props.open}
					style = {{top: '5%', left: '5%', right: '5%', margin: 'auto', alignItems:'center', justifyContent: 'center'}}
				>
					<Card>
						<CardHeader
							style = {{backgroundColor: '#3f51b5'}}
							action = {
								<Button 
									mini 
									variant = 'fab' 
									color = 'secondary' 
									aria-label = 'Close'
									onClick = {this.props.handleCloseClick}
								>
									<Icon><ClearIcon/></Icon>
								</Button>
							}
						/>

						<div className = 'job-modal-body'>
							{this.renderJobDetails()}
							<JobActivityLog/>
						</div>
					</Card>
				</Modal>
			);
		}
		return <></>
	}
}

export default hot(module)(JobModal);