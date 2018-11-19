import {combineReducers} from 'redux';
import * as types from './actionTypes';

const initialState = {
  jobs: [],
  currJob: null
}

function indeedJobs(state = initialState, action){
  switch(action.type){
    default:
      return state;
  }
}

const indeedJobsPage = combineReducers({
  indeedJobs
});

export default indeedJobsPage;
