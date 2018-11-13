import apiClient from '../../common/ApiClient';
import * as types from './actionTypes';

//JobsGrid Actions
export function openJobModal(job){
	let modal = {
		jobModalIsOpen: true,
		currJob: job
	}
	return {type: types.OPEN_JOB_MODAL, modal}
}

export function openAddModal(){
  return {type: types.OPEN_ADD_MODAL, addModalIsOpen: true}
}

//AddModal Actions
export function closeAddModal(){
  return {type: types.CLOSE_ADD_MODAL, addModalIsOpen: false}
}

//JobModal Actions
export function closeJobModal(){
  return {type: types.CLOSE_JOB_MODAL, jobModalIsOpen: false, editJobDetailsIsOpen: false}
}

//JobDetails Actions
export function openEditJobDetails(){
  return {type: types.OPEN_EDIT_JOB_DETAILS, editJobDetailsIsOpen: true}
}

//EditJobDetails Actions
export function closeEditJobDetails(){
	return {type: types.CLOSE_EDIT_JOB_DETAILS, editJobDetailsIsOpen: false}
}

export function addActivity(){
	return {type: types.ADD_ACTIVITY, addActivityIsOpen: false}
}

export function openAddActivity(){
	return {type: types.OPEN_ADD_ACTIVITY, addActivityIsOpen: true}
}

export function closeAddActivity(){
	return {type: types.CLOSE_ADD_ACTIVITY, addActivityIsOpen: false}
}

//API calls
//GET
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

//POST AND GET
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

//PUT AND GET
export function saveAndUpdate(_id, updatedJob){
	return function(dispatch){
		return apiClient.saveJob(_id, updatedJob).then(response => {
				dispatch(saveJobSuccess(updatedJob));
			})
			.catch(error => {
					throw(error);
			}).then(()=>{
				dispatch(getMyJobs());
			});
	}
}

export function saveJobSuccess(updatedJob){
  return {type: types.SAVE_JOB_DETAILS, editJobDetailsIsOpen: false, addActivityIsOpen: false, currJob: updatedJob}
}

//DELETE AND GET
export function deleteJobAndUpdate(_id){
	return function(dispatch){
		return apiClient.deleteJob(_id).then(response => {
				dispatch(deleteJobSuccess());
			})
			.catch(error => {
					throw(error);
			}).then(()=>{
				dispatch(getMyJobs());
			});
	}
}

export function deleteJobSuccess(){
  return {type: types.CLOSE_JOB_MODAL, jobModalIsOpen: false, editJobDetailsIsOpen: false}
}