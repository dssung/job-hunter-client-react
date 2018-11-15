import {connect} from 'react-redux';
import {closeUpdateActivity, saveAndUpdate, editActivityAndUpdate} from '../../duck/actions';
import UpdateActivity from '../components/UpdateActivity';

const mapStateToProps = store => {
	return {
    job: store.myJobsPage.myJobsGrid.currJob,
		open: store.myJobsPage.myJobsGrid.addActivityModalIsOpen,
		updateActivity: store.myJobsPage.myJobsGrid.updateActivity
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleCancelClick: () => {
			dispatch(closeUpdateActivity());
		},

		handleAddClick: (job, activity, clearFields) => {
			let updatedJob = Object.assign({}, job);
			updatedJob.activity_log.push(activity);
			dispatch(saveAndUpdate(job._id, updatedJob));
			clearFields();
		},

		handleUpdateClick: (job, activity, clearFields) => {
			clearFields();
			dispatch(editActivityAndUpdate(job._id, activity));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateActivity);

