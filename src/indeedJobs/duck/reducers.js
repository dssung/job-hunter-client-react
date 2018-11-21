import * as types from './actionTypes';

const initialState = {
  isLoading: false,
  jobs: [],
  currJob: {
    jobtitle:'',
    company: ''
  },
  searchField: {
    q: '',
    l: '',
    sort: 'relevance',
    start: 0,
    radius: 15,
    fromage: 3,
  },
}

function indeedJobsPage(state = initialState, action){
  switch(action.type){

    case types.GET_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.jobs,
        currJob: action.jobs[0],
        searchField: action.params
      }

    case types.SET_CURR_JOB:
      return {
        ...state,
        currJob: action.job
      }

    case types.SHOW_MORE_JOBS_SUCCESS:
      let jobs = Object.assign([], state.jobs);
      jobs = jobs.concat(action.jobs);
      
      return {
        ...state,
        jobs: jobs
      }

    case types.START_LOADING:
      return{
        ...state,
        isLoading: action.isLoading
      }

    case types.STOP_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }

    default:
      return state;
  }
}

export default indeedJobsPage;
