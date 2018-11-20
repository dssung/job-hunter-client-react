import * as types from './actionTypes';

const initialState = {
  jobs: [],
  currJob: {
    jobtitle:'',
    company: ''
  },
  searchField: {
    q: '',
    fromage: 3,
    l: '',
    radius: 15,
    sort: 'relevance'
  },
}

function indeedJobsPage(state = initialState, action){
  switch(action.type){

    case types.GET_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.jobs,
        currJob: action.jobs[0]
      }

    case types.SET_CURR_JOB:
      return {
        ...state,
        currJob: action.job
      }

    default:
      return state;
  }
}

export default indeedJobsPage;
