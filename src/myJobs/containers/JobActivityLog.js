import {connect} from 'react-redux';
import JobActivityLog from '../components/JobActivityLog';
import {openUpdateActivity, deleteActivityAndUpdate} from '../duck/actions';

const mapStateToProps = store => {
	return {
    job: store.myJobsPage.myJobsGrid.currJob,
    updateActivityIsOpen: store.myJobsPage.myJobsGrid.updateActivityIsOpen
  }
}

const mapDispatchToProps = dispatch => {
	return {
    handleAddClick: () => {
			dispatch(openUpdateActivity(null, null))
		},
		
		handleDeleteClick: (job, activity) => {
			dispatch(deleteActivityAndUpdate(job, activity))
		},

		handleEditClick: (job, activity) => {
			dispatch(openUpdateActivity(job, activity))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(JobActivityLog);

