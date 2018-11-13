import {connect} from 'react-redux';
import JobActivityLog from '../components/JobActivityLog';
import {openAddActivity} from '../duck/actions';

const mapStateToProps = store => {
	return {
    job: store.myJobsPage.myJobsGrid.currJob,
    addActivityIsOpen: store.myJobsPage.myJobsGrid.addActivityIsOpen
  }
}

const mapDispatchToProps = dispatch => {
	return {
    handleAddClick: () => {
			dispatch(openAddActivity())
		},
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(JobActivityLog);

