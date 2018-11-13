import {connect} from 'react-redux';
import {closeAddActivity, saveAndUpdate} from '../duck/actions';
import AddActivity from '../components/AddActivity';

const mapStateToProps = store => {
	return {
    job: store.myJobsPage.myJobsGrid.currJob,
    open: store.myJobsPage.myJobsGrid.addActivityModalIsOpen
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleCancelClick: () => {
			dispatch(closeAddActivity());
		},

		handleAddClick: (activity, job, clearFields) => {
			let updatedJob = Object.assign({}, job);
			updatedJob.activity_log.push(activity);
			clearFields();
			dispatch(saveAndUpdate(job._id, updatedJob));
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(AddActivity);

