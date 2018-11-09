import apiClient from '../../common/ApiClient';
import * as types from './actionTypes';

//UI
export function openJobModal(job){
	let modal = {
		jobModalIsOpen: true,
		currJob: job
	}
	return {type: types.OPEN_JOB_MODAL, modal}
}

export function closeJobModal(){
  return {type: types.CLOSE_JOB_MODAL, jobModalIsOpen: false}
}

export function openEditDetails(){
  return {type: types.OPEN_EDITABLE, editableIsOpen: true}
}

export function openAddModal(){
  return {type: types.OPEN_ADD_MODAL, addModalIsOpen: true}
}

export function closeAddModal(){
  return {type: types.CLOSE_ADD_MODAL, addModalIsOpen: false}
}

//API calls
export function getMyJobs(){
	return function(dispatch){
		return apiClient.getMyJobs().then(response => {
				dispatch(getMyJobsSuccess(response.data));
		})
		.catch(error => {
			throw(error);
		});
	}
}

export function getMyJobsSuccess(jobs){
  return { type: types.GET_MY_JOBS_SUCCESS, jobs};
}

export function createJobAndUpdate(job){
	return function(dispatch){
		return apiClient.createJob(job).then(response => {
				dispatch(createJobSuccess());
			})
			.catch(error => {
					throw(error);
			}).then(()=>{
				dispatch(getMyJobs());
			});
	}
}

export function createJobSuccess(){
  return {type: types.CLOSE_ADD_MODAL, addModalIsOpen: false}
}