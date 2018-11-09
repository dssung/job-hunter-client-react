import React from 'react';
import {Button, Card} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {hot} from 'react-hot-loader';
import '../style.scss';

class AddJobTile extends React.Component {

	render(){
		return (
			<Card className = 'add-job-tile'>
				<Button 
					mini variant='fab' 
					color='primary' 
					aria-label='Add'
				>
					<AddIcon/>
				</Button>
			</Card>
		)
	}
}

export default hot(module)(AddJobTile);