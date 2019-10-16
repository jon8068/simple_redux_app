import {combineReducers} from 'redux';
import nameReducer from '../Reducers/nameReducer';

const rootReducer = combineReducers({
  name: nameReducer,
});

export default rootReducer;