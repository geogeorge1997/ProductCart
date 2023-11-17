import {
  //
  ADD_FAV_SUCCESS,
  ADD_FAV_FAILURE,
  // REMOVE_FAV_SUCCESS,
  // REMOVE_FAV_FAILURE,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  // REMOVE_CART_SUCCESS,
  // REMOVE_CART_FAILURE,
} from './UserCartActionTypes';

// initializing state
const initialState = {
  favSuccess: {},
  favFailure: undefined,
  cartSuccess: {},
  cartFailure: undefined,
};

// istanbul ignore next
const userCartReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case ADD_FAV_SUCCESS:
      return {
        ...state,
        favSuccess: action.payload,
        favFailure: undefined,
        // testReduxFailure: false
      };
    case ADD_FAV_FAILURE:
      return {
        ...state,
        favFailure: action.payload,
        // testReduxFailure: false
      };
    case ADD_CART_SUCCESS:
      return {
        ...state,
        cartSuccess: action.payload,
        cartFailure: undefined,
        // testReduxFailure: false
      };
    case ADD_CART_FAILURE:
      return {
        ...state,
        cartFailure: action.payload,
        // testReduxFailure: false
      };
    default:
      return state;
  }
};

export default userCartReducer;
