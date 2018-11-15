import {connect} from 'react-redux';
import JobModal from '../components/JobModal';
import {closeJobModal} from '../../duck/actions';

const mapStateToProps = store => {
	return {
        job: store.myJobsPage.myJobsGrid.currJob,
        open: store.myJobsPage.myJobsGrid.jobModalIsOpen,
        editJobDetailsIsOpen: store.myJobsPage.myJobsGrid.editJobDetailsIsOpen
    }
}

const mapDispatchToProps = dispatch => {
	return {
		handleCloseClick: () => {
			dispatch(closeJobModal())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JobModal);
