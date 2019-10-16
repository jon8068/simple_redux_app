import {CHANGE_NAME, CHANGE_AGE} from './types';

export const changeName = newData => {
  return {
    type: CHANGE_NAME,
    payload: newData,
  };
};

export const changeAge = newData => {
  return {
    type: CHANGE_AGE,
    payload: newData,
  };
};

