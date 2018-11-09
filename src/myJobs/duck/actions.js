import apiClient from '../../common/ApiClient';
export const GET_ALL_MY_JOBS_SUCCESS = 'GET_ALL_MY_JOBS_SUCCESS';
export const SHOW_JOB_MODAL = 'SHOW_JOB_MODAL';


export function showJobModal(){
    return {type: SHOW_JOB_MODAL, jobModalIsOpen: true}
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
    return { type: GET_ALL_MY_JOBS_SUCCESS, jobs};
}