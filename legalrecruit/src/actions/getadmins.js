import axios from 'axios';
export const GET_ADMINS_PENDING = 'GET_ADMINS_PENDING';
export const GET_ADMINS_SUCCESS = 'GET_ADMINS_SUCCESS';

export const getAdmins = () =>{
  return async (dispatch) => {
    dispatch({type: GET_ADMINS_PENDING})
    let admins = await axios.get('http://localhost:8000/admins')
    dispatch({
      type: GET_ADMINS_SUCCESS,
      payload: admins
    })
  }
}
