import {combineReducers} from 'redux';
import * as types from './actionTypes';

const initialState = {
	jobModalIsOpen: false,
	currJob: null,
	editJobDetailsIsOpen: false,
	addModalIsOpen: false,
	updateActivityIsOpen: false,
	updateActivity: null
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
				editJobDetailsIsOpen: action.editJobDetailsIsOpen,
				updateActivityIsOpen: action.updateActivityIsOpen
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
				updateActivityIsOpen: action.updateActivityIsOpen,
				currJob: action.currJob
			}

		case types.OPEN_UPDATE_ACTIVITY:
			return {
				...state,
				updateActivityIsOpen: action.updateActivityIsOpen,
				updateActivity: action.updateActivity
			}

		case types.CLOSE_UPDATE_ACTIVITY:
			return {
				...state,
				updateActivityIsOpen: action.updateActivityIsOpen
			}

		case types.EDIT_ACTIVITY_SUCCESS:
			return {
				...state,
				currJob: action.currJob,
				updateActivityIsOpen: action.updateActivityIsOpen,
				updateActivity: action.updateActivity
			}

		case types.DELETE_ACTIVITY_SUCCESS:
			return {
				...state,
				currJob: action.currJob
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



