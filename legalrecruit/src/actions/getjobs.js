import axios from 'axios';
export const GET_JOBS_PENDING = 'GET_JOBS_PENDING';
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS';

export const getJobs = () =>{
  return async (dispatch) => {
    dispatch({type: GET_JOBS_PENDING})
    let jobs = await axios.get('http://localhost:8000/jobs')
    dispatch({
      type: GET_JOBS_SUCCESS,
      payload: jobs
    })
  }
}
