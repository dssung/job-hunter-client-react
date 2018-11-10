import {connect} from 'react-redux';
import JobDetails from '../components/JobDetails';
import {closeJobModal, openEditJobDetails, saveAndUpdate} from '../duck/actions';

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
		},

		handleSelectChange: (job) => {
			let newValue = event.target.dataset.value
			
			let newJob = {
				...job,
				status: newValue
			}

			dispatch(saveAndUpdate(newJob._id, newJob));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);

