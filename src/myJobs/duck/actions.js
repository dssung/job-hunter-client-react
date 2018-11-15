import apiClient from '../../common/ApiClient';
import * as types from './actionTypes';

//JobModal
export function openJobModal(job){
	let modal = {
		jobModalIsOpen: true,
		currJob: job
	}
	return {type: types.OPEN_JOB_MODAL, modal}
}

export function closeJobModal(){
  return {type: types.CLOSE_JOB_MODAL, jobModalIsOpen: false, editJobDetailsIsOpen: false, updateActivityIsOpen: false}
}

//Add Modal
export function openAddModal(){
  return {type: types.OPEN_ADD_MODAL, addModalIsOpen: true}
}

export function closeAddModal(){
  return {type: types.CLOSE_ADD_MODAL, addModalIsOpen: false}
}

//JobDetails Actions
export function openEditJobDetails(){
  return {type: types.OPEN_EDIT_JOB_DETAILS, editJobDetailsIsOpen: true}
}

export function closeEditJobDetails(){
	return {type: types.CLOSE_EDIT_JOB_DETAILS, editJobDetailsIsOpen: false}
}

//UpdateActivity
//Used for adding and editing activities
export function openUpdateActivity(job, activity){
	if (job == null){
		return {type: types.OPEN_UPDATE_ACTIVITY, updateActivityIsOpen: true, updateActivity: null}
	} else {
		return {type: types.OPEN_UPDATE_ACTIVITY, updateActivityIsOpen: true, updateActivity: [job, activity]}
	}
}

export function closeUpdateActivity(){
	return {type: types.CLOSE_UPDATE_ACTIVITY, updateActivityIsOpen: false}
}

//API calls
//GET
export function getMyJobs(){
	return (dispatch) => {
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
	return (dispatch) => {
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
	return (dispatch) => {
		return apiClient.saveJob(_id, updatedJob).then(res => {
				dispatch(saveJobSuccess(res.data));
			})
			.catch(error => {
					throw(error);
			}).then(()=>{
				dispatch(getMyJobs());
			});
	}
}

export function saveJobSuccess(updatedJob){
  return {type: types.SAVE_JOB_DETAILS, editJobDetailsIsOpen: false, updateActivityIsOpen: false, currJob: updatedJob}
}

//DELETE AND GET
export function deleteJobAndUpdate(_id){
	return (dispatch) => {
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

export function deleteActivityAndUpdate(job, activity){
	return (dispatch) => {
		return apiClient.deleteActivity(job._id, activity._id).then(res=> {
			dispatch(deleteActivitySuccess(res.data));
		})
		.catch(error => {
			throw(error);
		}).then(()=>{
			dispatch(getMyJobs());
		});
	}
}

export function deleteActivitySuccess(updatedJob){
	return {type: types.DELETE_ACTIVITY_SUCCESS, currJob: updatedJob}
}

export function editActivityAndUpdate(jobId, updatedActivity){
	return (dispatch) => {
		return apiClient.editActivity(jobId, updatedActivity._id, updatedActivity).then(res => {
			dispatch(editActivitySuccess(res.data));
		})
		.catch(error => {
			throw(error);
		}).then(()=>{
			dispatch(getMyJobs());
		});
	}
}

export function editActivitySuccess(updatedJob){
	return {type: types.SAVE_UPDATE_ACTIVITY, currJob: updatedJob, updateActivityIsOpen: false, updateActivity: null}
}