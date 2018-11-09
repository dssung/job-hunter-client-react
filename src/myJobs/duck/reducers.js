import {combineReducers} from 'redux';
import * as types from './actionTypes';

const initialState = {
	jobModalIsOpen: false,
	currJob: null,
	editableIsOpen: false
}

function myJobsGrid(state = initialState, action){
	switch(action.type){
		case types.OPEN_JOB_MODAL:
			return {
				...state,
				jobModalIsOpen: action.modal.jobModalIsOpen,
				currJob: action.modal.currJob
			}

		case types.CLOSE_JOB_MODAL:
			return {
				...state,
				jobModalIsOpen: action.jobModalIsOpen
			}

		case types.OPEN_EDITABLE:
			return{
				...state,
				editableIsOpen: action.editableIsOpen
			}
		
		default:
			return state;
	}
}

function myJobs(state = [], action){
	switch(action.type){
		case types.GET_ALL_MY_JOBS_SUCCESS:
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



