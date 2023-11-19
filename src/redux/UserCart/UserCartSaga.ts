import {
  //   takeLatest,
  takeEvery,
  put,
  //   type CallEffect,
  type PutEffect,
} from 'redux-saga/effects';

import {type AnyAction} from 'redux';
import {type AxiosResponse} from 'axios';

import {
  ADD_FAV_SUCCESS,
  ADD_FAV_FAILURE,
  ADD_FAV_REQUEST,
  REMOVE_FAV_REQUEST,
  REMOVE_FAV_SUCCESS,
  REMOVE_FAV_FAILURE,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  ADD_CART_REQUEST,
  REMOVE_CART_REQUEST,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAILURE,
  USER_CART_LOADING_REQUEST,
  USER_CART_LOADING,
} from './UserCartActionTypes';

// import * as API from '../../network/API';
// import * as CONSTANTS from '../../utils/contants';

function* addFavSaga(data: {
  payload: {payloadData: any};
  type: string;
}): Generator<
  Promise<AxiosResponse<any, any>> | PutEffect<AnyAction>,
  void,
  void
> {
  try {
    const payload = data.payload.payloadData;
    yield put({
      type: ADD_FAV_SUCCESS,
      payload: payload,
    });
  } catch (error) {
    yield put({
      type: ADD_FAV_FAILURE,
      payload: 'Error Occured in ADD_FAV_FAILURE',
    });
  }
}

export function* watchAddFavSaga(): any {
  yield takeEvery(ADD_FAV_REQUEST, addFavSaga);
}

function* removeFavSaga(data: {
  payload: {payloadData: any};
  type: string;
}): Generator<
  Promise<AxiosResponse<any, any>> | PutEffect<AnyAction>,
  void,
  void
> {
  try {
    console.log('data - ', data);
    yield put({
      type: REMOVE_FAV_SUCCESS,
      payload: 'response.data',
    });
  } catch (error) {
    yield put({
      type: REMOVE_FAV_FAILURE,
      payload: 'Error Occured in REMOVE_FAV_FAILURE',
    });
  }
}

export function* watchRemoveFavSaga(): any {
  yield takeEvery(REMOVE_FAV_REQUEST, removeFavSaga);
}

function* addCartSaga(data: {
  payload: {payloadData: any};
  type: string;
}): Generator<
  Promise<AxiosResponse<any, any>> | PutEffect<AnyAction>,
  void,
  void
> {
  try {
    const payload = data.payload.payloadData;
    yield put({
      type: ADD_CART_SUCCESS,
      payload: payload,
    });
  } catch (error) {
    yield put({
      type: ADD_CART_FAILURE,
      payload: 'Error Occured in ADD_CART_FAILURE',
    });
  }
}

export function* watchAddCartSaga(): any {
  yield takeEvery(ADD_CART_REQUEST, addCartSaga);
}

function* removeCartSaga(data: {
  payload: {payloadData: any};
  type: string;
}): Generator<
  Promise<AxiosResponse<any, any>> | PutEffect<AnyAction>,
  void,
  void
> {
  try {
    console.log('data - ', data);
    yield put({
      type: REMOVE_CART_SUCCESS,
      payload: 'response.data',
    });
  } catch (error) {
    yield put({
      type: REMOVE_CART_FAILURE,
      payload: 'Error Occured in REMOVE_CART_FAILURE',
    });
  }
}

export function* watchRemoveCartSaga(): any {
  yield takeEvery(REMOVE_CART_REQUEST, removeCartSaga);
}

function* userCartLoaderSaga(data: {
  payload: boolean;
  type: string;
}): Generator<
  Promise<AxiosResponse<any, any>> | PutEffect<AnyAction>,
  void,
  void
> {
  yield put({
    type: USER_CART_LOADING,
    payload: data.payload,
  });
}

export function* watchUserCartLoaderSaga(): any {
  yield takeEvery(USER_CART_LOADING_REQUEST, userCartLoaderSaga);
}
