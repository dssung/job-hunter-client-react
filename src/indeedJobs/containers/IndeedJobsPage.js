import {connect} from 'react-redux';
import IndeedJobsPageComponent from '../components/IndeedJobsPage';
import {setCurrJob} from '../duck/actions';

const mapStateToProps = store => {
	return {
		jobs: store.indeedJobsPage.jobs,
		currJob: store.indeedJobsPage.currJob,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleListItemClick: (job) => {
			dispatch(setCurrJob(job))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IndeedJobsPageComponent);

