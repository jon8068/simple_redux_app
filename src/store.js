import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers/index';
import logger from 'redux-logger';

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(logger));
};

export default configureStore;
