import {connect} from 'react-redux';
import JobsGridComponent from '../components/JobsGrid';
import {openJobModal} from '../duck/actions';

const mapStateToProps = store => {
	return {
		jobs: store.myJobsPage.myJobs,
		jobModalIsOpen: store.myJobsPage.myJobsGrid.jobModalIsOpen,
		currJob: store.myJobsPage.myJobsGrid.currJob
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleJobTileClick: (job) => {
				dispatch(openJobModal(job))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobsGridComponent);

