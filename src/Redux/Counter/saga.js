import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { operations } from './constant';

export function* incrementSaga() {
  try {
    yield put({ type: operations.INCREMENT_SUCCESS, payload: 1 });
    console.log('increment saga');
  } catch (error) {
    console.error('Increment error:', error);
  }
}

export function* decrementSaga() {
  try {
    yield put({ type: operations.DECREMENT_SUCCESS, payload: 1 });
    console.log('decrement saga');
  } catch (error) {
    console.error('Decrement error:', error);
  }
}

export function* resetSaga() {
  try {
    yield put({ type: operations.RESET_SUCCESS });
    console.log('reset saga');
  } catch (error) {
    console.error('Reset error:', error);
  }
}

export function* watchIncrement() {
  yield takeLatest(operations.INCREMENT, incrementSaga);
}

export function* watchDecrement() {
  yield takeLatest(operations.DECREMENT, decrementSaga);
}

export function* watchReset() {
  yield takeLatest(operations.RESET, resetSaga);
}

export default function* counterSaga() {
  yield all([
    fork(watchIncrement),
    fork(watchDecrement),
    fork(watchReset),
  ]);
}