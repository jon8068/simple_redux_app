import {combineReducers} from 'redux';
import UserReducer from '../Reducers/UserReducer';

const rootReducer = combineReducers({
  user: UserReducer,
});

export default rootReducer;
