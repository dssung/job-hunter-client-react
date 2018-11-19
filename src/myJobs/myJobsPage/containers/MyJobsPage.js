import {connect} from 'react-redux';
import MyJobsPageComponent from '../components/MyJobsPage';
import {openJobModal, openAddModal} from '../../duck/actions';

const mapStateToProps = store => {
	return {
		jobs: store.myJobsPage.myJobs,
		currJob: store.myJobsPage.currJob,
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

export default connect(mapStateToProps, mapDispatchToProps)(MyJobsPageComponent);

