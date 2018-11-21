import {connect} from 'react-redux';
import JobSearchBarComponent from '../components/JobSearchBar';
import {getJobs, startLoading} from '../duck/actions';

const mapStateToProps = store => {
	return {
    searchField: store.indeedJobsPage.searchField,
    jobs: store.indeedJobsPage.jobs
	}
}

const mapDispatchToProps = dispatch => {
	return {
    handleSearch: (params) => {
      dispatch(startLoading());
      
      if (params.fromage === 'All')
        params.fromage = '';

      params.start = 0;
      dispatch(getJobs(params));
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchBarComponent);

