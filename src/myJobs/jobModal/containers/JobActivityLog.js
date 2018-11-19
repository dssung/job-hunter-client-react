import {connect} from 'react-redux';
import JobActivityLog from '../components/JobActivityLog';
import {openUpdateActivity, deleteActivityAndUpdate} from '../../duck/actions';

const mapStateToProps = store => {
	return {
    job: store.myJobsPage.currJob,
    updateActivityIsOpen: store.myJobsPage.updateActivityIsOpen
  }
}

const mapDispatchToProps = dispatch => {
	return {
    handleAddClick: () => {
			dispatch(openUpdateActivity(null, null))
		},
		
		handleEditClick: (job, activity) => {
			dispatch(openUpdateActivity(job, activity))
		},
		
		handleDeleteClick: (job, activity) => {
			dispatch(deleteActivityAndUpdate(job, activity))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(JobActivityLog);

