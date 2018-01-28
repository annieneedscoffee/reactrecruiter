
import {combineReducers} from 'redux';
import jobsReducer from './reducer-jobs';
import employersReducer from './reducer-employers';
import workersReducer from './reducer-workers';
import adminsReducer from './reducer-admins';

const allReducers = combineReducers({
  jobs: jobsReducer,
  employers: employersReducer,
  workers: workersReducer,
  admins: adminsReducer,
});

export default allReducers;
