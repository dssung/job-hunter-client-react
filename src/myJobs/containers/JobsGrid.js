import {connect} from 'react-redux';
import JobsGridComponent from '../components/JobsGrid';
import {openJobModal, openAddModal} from '../duck/actions';

const mapStateToProps = store => {
	return {
		jobs: store.myJobsPage.myJobs,
		jobModalIsOpen: store.myJobsPage.myJobsGrid.jobModalIsOpen,
		currJob: store.myJobsPage.myJobsGrid.currJob,
		addModalIsOpen: store.myJobsPage.myJobsGrid.addModalIsOpen
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleJobTileClick: (job) => {
				dispatch(openJobModal(job))
		},

		handleAddTileClick: () => {
			dispatch(openAddModal())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsGridComponent);

