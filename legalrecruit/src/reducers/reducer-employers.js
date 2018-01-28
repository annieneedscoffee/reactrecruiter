
import {
  GET_EMPLOYERS_PENDING,
  GET_EMPLOYERS_SUCCESS
} from '../actions/getemployers'

export default(state = [], action) =>{
  switch (action.type) {
    case GET_EMPLOYERS_PENDING:
    return state;
    case GET_EMPLOYERS_SUCCESS:
    return [...action.payload.data];
    default:
    return state;
  }
};
