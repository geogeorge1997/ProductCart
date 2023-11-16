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
  TEST_REDUX_SUCCESS,
  TEST_REDUX_FAILURE,
  TEST_REDUX_REQUEST,
} from './TestReduxActionTypes';

import * as API from '../../network/API';
// import * as CONSTANTS from '../../utils/contants';

function* readTestReduxSaga(data: {
  payload: {payloadData: any};
  type: string;
}): Generator<
  Promise<AxiosResponse<any, any>> | PutEffect<AnyAction>,
  void,
  void
> {
  try {
    const response: any = yield API.testReduxAPI(data.payload.payloadData);
    yield put({
      type: TEST_REDUX_SUCCESS,
      payload: response.data.message,
    });
  } catch (error) {
    yield put({
      type: TEST_REDUX_FAILURE,
      payload: 'Error Occured in Test Redux Saga',
    });
  }
}

export function* watchReadTestReduxSaga(): any {
  yield takeEvery(TEST_REDUX_REQUEST, readTestReduxSaga);
}
