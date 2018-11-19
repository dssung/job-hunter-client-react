import {connect} from 'react-redux';
import JobModal from '../components/JobModal';
import {closeJobModal} from '../../duck/actions';

const mapStateToProps = store => {
	return {
        job: store.myJobsPage.currJob,
        open: store.myJobsPage.jobModalIsOpen,
        editJobDetailsIsOpen: store.myJobsPage.editJobDetailsIsOpen
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
