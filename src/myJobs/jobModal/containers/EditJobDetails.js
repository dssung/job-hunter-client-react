import {connect} from 'react-redux';
import EditJobDetails from '../components/EditJobDetails';
import {closeEditJobDetails, deleteJobAndUpdate, saveAndUpdate} from '../../duck/actions';

const mapStateToProps = store => {
	return {
        job: store.myJobsPage.myJobsGrid.currJob
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleCloseClick: () => {
			dispatch(closeEditJobDetails())
		},

		handleSaveClick: (_id, updatedJob) => {
			dispatch(saveAndUpdate(_id, updatedJob))
		},

		handleDeleteClick: (_id) => {
			dispatch(deleteJobAndUpdate(_id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditJobDetails);

