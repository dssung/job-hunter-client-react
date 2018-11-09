import {combineReducers} from 'redux';
import myJobsPage from './myJobs/duck/reducers';

const rootReducer = combineReducers({
    myJobsPage
});

export default rootReducer;