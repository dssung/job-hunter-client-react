import {connect} from 'react-redux';
import JobDetailComponent from '../components/JobDetail';
import {createJobAndUpdate} from '../../myJobs/duck/actions';

const mapStateToProps = store => {
  return {
    job: store.indeedJobsPage.currJob,
    jobs: store.indeedJobsPage.jobs
  }
}

const mapDispatchToProps = dispatch => {
	return {
		handleAddJobClick: (job) => {
      let addJob = {
        company: job.company,
        position: job.jobtitle,
        location: job.formattedLocation,
        notes: job.snippet,
        url: job.url,
        status: 'INTERESTED'
      }

      dispatch(createJobAndUpdate(addJob));
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetailComponent);

