
import {
  GET_ADMINS_PENDING,
  GET_ADMINS_SUCCESS
} from '../actions/getadmins'

export default(state = [], action) =>{
  switch (action.type) {
    case GET_ADMINS_PENDING:
    return state;
    case GET_ADMINS_SUCCESS:
    return [...action.payload.data];
    default:
    return state;
  }
};
