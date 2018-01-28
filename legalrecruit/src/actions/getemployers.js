import axios from 'axios';
export const GET_EMPLOYERS_PENDING = 'GET_EMPLOYERS_PENDING';
export const GET_EMPLOYERS_SUCCESS = 'GET_EMPLOYERS_SUCCESS';

export const getEmployers = () =>{
  return async (dispatch) => {
    dispatch({type: GET_EMPLOYERS_PENDING})
    let employers = await axios.get('http://localhost:8000/employers')
    dispatch({
      type: GET_EMPLOYERS_SUCCESS,
      payload: employers
    })
  }
}
