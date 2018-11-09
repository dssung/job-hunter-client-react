import {connect} from 'react-redux';
import JobsGridComponent from '../components/JobsGrid';
import {showJobModal} from '../duck/actions';

const mapStateToProps = store => {
    return {
        jobs: store.myJobsPage.myJobs,
        jobModalIsOpen: store.myJobsPage.myJobsGrid.jobModalIsOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onJobTileClick: () => {
            dispatch(showJobModal())
        }
    }
}

const JobsGrid = connect(mapStateToProps, mapDispatchToProps)(JobsGridComponent)

export default JobsGrid;


