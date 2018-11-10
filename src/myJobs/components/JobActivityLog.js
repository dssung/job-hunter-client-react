import React from 'react';
import {hot} from 'react-hot-loader';
import {Modal, Card, CardHeader, CardActions, CardContent, Button, Icon} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

class JobModal extends React.Component {
	
	render(){
			return (
        <CardContent>
          <h2>Activity Log</h2>
        </CardContent>
      );
	}
}

export default hot(module)(JobModal);