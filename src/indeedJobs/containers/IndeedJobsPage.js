import {connect} from 'react-redux';
import IndeedJobsPageComponent from '../components/IndeedJobsPage';
import {setCurrJob, showMoreJobs} from '../duck/actions';

const mapStateToProps = store => {
	return {
		jobs: store.indeedJobsPage.jobs,
		currJob: store.indeedJobsPage.currJob,
		searchField: store.indeedJobsPage.searchField,
		isLoading: store.indeedJobsPage.isLoading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		handleListItemClick: (job) => {
			dispatch(setCurrJob(job))
		},

		handleShowMoreClick: (params) => {
			if (params.fromage === 'All')
        params.fromage = '';

			params.start = params.start + 8;
			dispatch(showMoreJobs(params));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IndeedJobsPageComponent);

