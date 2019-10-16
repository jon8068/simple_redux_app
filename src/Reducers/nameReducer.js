import {CHANGE_NAME} from '../Actions/types';

const initialState = {
  name: [],
};

const nameReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case CHANGE_NAME:
      return {
        state: action.payload,
      };
    default:
      return state;
  }
};

export default nameReducer;
