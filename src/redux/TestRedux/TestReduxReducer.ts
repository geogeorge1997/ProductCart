import {
  //
  TEST_REDUX_SUCCESS,
  TEST_REDUX_FAILURE,
} from './TestReduxActionTypes';

// initializing state
const initialState = {
  testReduxSuccess: [],
  testReduxFailure: undefined,
};

// istanbul ignore next
const testReduxReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case TEST_REDUX_SUCCESS:
      return {
        ...state,
        testReduxSuccess: action.payload,
        testReduxFailure: undefined,
        // testReduxFailure: false
      };
    case TEST_REDUX_FAILURE:
      return {
        ...state,
        testReduxFailure: action.payload,
        // testReduxFailure: false
      };
    default:
      return state;
  }
};

export default testReduxReducer;
