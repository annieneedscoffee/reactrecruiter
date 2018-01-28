
import {
  GET_JOBS_PENDING,
  GET_JOBS_SUCCESS
} from '../actions/getjobs'

export default(state = [], action) =>{
  switch (action.type) {
    case GET_JOBS_PENDING:
    return state;
    case GET_JOBS_SUCCESS:
    return [...action.payload.data];
    default:
    return state;
  }
};
