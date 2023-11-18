import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import createSagaMiddleware from '@redux-saga/core';
import {all, fork} from 'redux-saga/effects';

import testReduxReducer from './TestRedux/TestReduxReducer';
import {watchReadTestReduxSaga} from './TestRedux/TestReduxSaga';

import userCartReducer from './UserCart/UserCartReducer';
import {
  watchAddFavSaga,
  watchAddCartSaga,
  watchRemoveCartSaga,
  watchRemoveFavSaga,
  watchUserCartLoaderSaga,
} from './UserCart/UserCartSaga';

const rootReducer = combineReducers({
  testReduxReducer,
  userCartReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export type State = ReturnType<typeof rootReducer>;
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares)),
);

export function* rootSaga(): any {
  yield all([
    fork(watchReadTestReduxSaga),
    fork(watchAddCartSaga),
    fork(watchAddFavSaga),
    fork(watchRemoveCartSaga),
    fork(watchRemoveFavSaga),
    fork(watchUserCartLoaderSaga),
  ]);
}

sagaMiddleware.run(rootSaga);

export default store;
