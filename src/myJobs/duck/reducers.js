import {combineReducers} from 'redux';
import * as types from './actionTypes';

const initialState = {
	jobModalIsOpen: false,
	currJob: null,
	editJobDetailsIsOpen: false,
	addModalIsOpen: false,
	addActivityIsOpen: false
}

function myJobsGrid(state = initialState, action){
	switch(action.type){
		case types.CLOSE_ADD_MODAL:
			return {
				...state,
				addModalIsOpen: action.addModalIsOpen
			}

		case types.CLOSE_EDIT_JOB_DETAILS:
			return{
				...state,
				editJobDetailsIsOpen: action.editJobDetailsIsOpen
			}
		
		case types.CLOSE_JOB_MODAL:
			return {
				...state,
				jobModalIsOpen: action.jobModalIsOpen,
				editJobDetailsIsOpen: action.editJobDetailsIsOpen
			}

		case types.OPEN_ADD_MODAL:
			return {
				...state,
				addModalIsOpen: action.addModalIsOpen
			}

		case types.OPEN_EDIT_JOB_DETAILS:
		return{
			...state,
			editJobDetailsIsOpen: action.editJobDetailsIsOpen
		}
		
		case types.OPEN_JOB_MODAL:
			return {
				...state,
				jobModalIsOpen: action.modal.jobModalIsOpen,
				currJob: action.modal.currJob
			}

		case types.SAVE_JOB_DETAILS:
			return {
				...state,
				editJobDetailsIsOpen: action.editJobDetailsIsOpen,
				addActivityIsOpen: action.addActivityIsOpen,
				currJob: action.currJob
			}

		case types.OPEN_ADD_ACTIVITY:
			return {
				...state,
				addActivityIsOpen: action.addActivityIsOpen
			}

		case types.CLOSE_ADD_ACTIVITY:
			return {
				...state,
				addActivityIsOpen: action.addActivityIsOpen
			}

		default:
			return state;
	}
}

function myJobs(state = [], action){
	switch(action.type){
		case types.GET_MY_JOBS_SUCCESS:
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



