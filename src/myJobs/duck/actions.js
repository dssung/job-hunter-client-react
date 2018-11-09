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

//API calls
export function getAllMyJobs(){
    return function(dispatch){
        return apiClient.getAllMyJobs().then(response => {
           return dispatch(getAllMyJobsSuccess(response.data));
        })
        .catch(error => {
            throw(error);
        });;
    }
}

export function getAllMyJobsSuccess(jobs){
    return { type: types.GET_ALL_MY_JOBS_SUCCESS, jobs};
}