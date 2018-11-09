import React from 'react';
import {hot} from 'react-hot-loader';
import {Modal, Paper, Select, MenuItem, Button, Icon} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';

class JobModal extends React.Component{
	constructor(props){
		super(props);
	}

	render(){		
		return (
			<Modal open = {this.props.open}>
				<Paper>
                
				</Paper>
			</Modal>
		);  
	}
}

export default hot(module)(JobModal);