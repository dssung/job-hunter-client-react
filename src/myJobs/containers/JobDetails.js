import {connect} from 'react-redux';
import JobDetails from '../components/JobDetails';
import {closeJobModal, openEditDetails} from '../duck/actions';

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
			dispatch(openEditDetails())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);

