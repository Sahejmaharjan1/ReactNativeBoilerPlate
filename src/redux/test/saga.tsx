import {
  all,
  call,
  fork,
  put,
  StrictEffect,
  takeEvery,
} from 'redux-saga/effects';
import {GET_USER_PROFILE} from './constant';
import {getUserProfileSuccess, getUserProfileFailed} from './action';
import {getUserProfileApi} from './api';

function* handleGetUserProfile(): Generator<StrictEffect, void, any> {
  try {
    const userProfileData = yield call(() => getUserProfileApi());
    yield put(getUserProfileSuccess(userProfileData));
  } catch (error) {
    yield put(getUserProfileFailed(error));
  }
}

function* watchGetUserProfile() {
  yield takeEvery(GET_USER_PROFILE, handleGetUserProfile);
}

export default function* rootSaga(): Generator<StrictEffect> {
  yield all([fork(watchGetUserProfile)]);
}
