import {connect} from 'react-redux';
import JobSearchBarComponent from '../components/JobSearchBar';
import {getJobs} from '../duck/actions';

const mapStateToProps = store => {
	return {
    searchField: store.indeedJobsPage.searchField,
    jobs: store.indeedJobsPage.jobs
	}
}

const mapDispatchToProps = dispatch => {
	return {
    handleSearchClick: (params) => {
      if (params.fromage === 'All'){
        params.fromage = '';
      }
      
      dispatch(getJobs(params))
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchBarComponent);

