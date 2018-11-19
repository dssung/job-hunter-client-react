import {connect} from 'react-redux';
import IndeedJobsPageComponent from '../components/IndeedJobsPage';
//import {openJobModal, openAddModal} from '../../duck/actions';

const mapStateToProps = store => {
	return {
		jobs: store.myJobsPage.myJobs,
		currJob: store.myJobsPage.currJob,
	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IndeedJobsPageComponent);

