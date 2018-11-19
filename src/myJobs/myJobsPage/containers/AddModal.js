import {connect} from 'react-redux';
import AddModal from '../components/AddModal';
import {closeAddModal, createJobAndUpdate} from '../../duck/actions';

const mapStateToProps = store => {
	return {
		addJob: store.myJobsPage.addJob,
		open: store.myJobsPage.addModalIsOpen
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleCancelClick: (clearFields) => {
			clearFields();
			dispatch(closeAddModal())
		},

		handleAddClick: (job, clearFields) => {
			clearFields();
			dispatch(createJobAndUpdate(job))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);

