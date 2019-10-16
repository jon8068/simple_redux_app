import {CHANGE_NAME, CHANGE_AGE} from '../Actions/types';

const initialState = {
    name: '',
    age: '',
};

const UserReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case CHANGE_AGE:
      return {
        ...state,
        age: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
