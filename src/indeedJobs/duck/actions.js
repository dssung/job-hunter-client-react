import indeedApi from '../../common/IndeedApi';
import * as types from './actionTypes';

export function setCurrJob(job){
  return {type: types.SET_CURR_JOB, job}
}

export function getJobs(params){
  return (dispatch) => {
    return indeedApi.getJobs(params)
            .then(response => {
              dispatch(getJobsSuccess(response.data.results));
            })
            .catch(error => {
              throw (error);
            });
  }
}

export function getJobsSuccess(jobs){
  return {type: types.GET_JOBS_SUCCESS, jobs}
}