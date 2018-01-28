import axios from 'axios';
export const GET_WORKERS_PENDING = 'GET_WORKERS_PENDING';
export const GET_WORKERS_SUCCESS = 'GET_WORKERS_SUCCESS';

export const getWorkers = () =>{
  return async (dispatch) => {
    dispatch({type: GET_WORKERS_PENDING})
    let workers = await axios.get('http://localhost:8000/workers')
    dispatch({
      type: GET_WORKERS_SUCCESS,
      payload: workers
    })
  }
}
