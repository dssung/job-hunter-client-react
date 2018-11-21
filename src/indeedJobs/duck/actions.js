import indeedApi from '../../common/IndeedApi';
import * as types from './actionTypes';

export function setCurrJob(job){
  return {type: types.SET_CURR_JOB, job}
}

export function startLoading(){
  return {type: types.START_LOADING, isLoading: true}
}

export function stopLoading(){
  return {type: types.STOP_LOADING, isLoading: false}
}

//API Calls
export function getJobs(params){
  return (dispatch) => {
    return indeedApi.getJobs(params)
            .then(response => {
              dispatch(stopLoading());
              dispatch(getJobsSuccess(response.data.results, params));
            })
            .catch(error => {
              throw (error);
            })
  }
}

export function getJobsSuccess(jobs, params){
  return {type: types.GET_JOBS_SUCCESS, jobs: jobs, params: params}
}

export function showMoreJobs(params){
  return (dispatch) => {
    return indeedApi.getJobs(params)
      .then(response => {
        dispatch(showMoreJobsSuccess(response.data.results));
      })
      .catch(error => {
        throw (error);
      });
  }
}

export function showMoreJobsSuccess(jobs){
  return {type: types.SHOW_MORE_JOBS_SUCCESS, jobs}
}