import {combineReducers} from 'redux';
import myJobsPage from './myJobs/duck/reducers';
import indeedJobsPage from './indeedJobs/duck/reducers';

const rootReducer = combineReducers({
    myJobsPage,
    indeedJobsPage
});

export default rootReducer;