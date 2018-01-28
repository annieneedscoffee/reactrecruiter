
import {
  GET_WORKERS_PENDING,
  GET_WORKERS_SUCCESS
} from '../actions/getworkers'

export default(state = [], action) =>{
  switch (action.type) {
    case GET_WORKERS_PENDING:
    return state;
    case GET_WORKERS_SUCCESS:
    return [...action.payload.data];
    default:
    return state;
  }
};
