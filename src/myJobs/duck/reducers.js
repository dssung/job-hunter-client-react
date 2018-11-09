import {combineReducers} from 'redux';
import { GET_ALL_MY_JOBS_SUCCESS, SHOW_JOB_MODAL} from './actions';

const initialState = {
    jobModalIsOpen: false
}

function myJobsGrid(state = initialState, action){
    switch(action.type){
        case SHOW_JOB_MODAL:
            return {
                ...state,
                jobModalIsOpen: action.jobModalIsOpen
            }
        
        default:
            return state;
    }
}

function myJobs(state = [], action){
    switch(action.type){
        case GET_ALL_MY_JOBS_SUCCESS:
            return action.jobs
        
        default:
            return state;
    }
}

const myJobsPage = combineReducers({
    myJobs,
    myJobsGrid
});

export default myJobsPage;



