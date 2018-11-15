import {connect} from 'react-redux';
import JobDetails from '../components/JobDetails';
import {closeJobModal, openEditJobDetails} from '../../duck/actions';

const mapStateToProps = store => {
	return {
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleCloseClick: () => {
			dispatch(closeJobModal())
		},

		handleEditClick: () => {
			dispatch(openEditJobDetails())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);