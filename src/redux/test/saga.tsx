import {
  all,
  call,
  CallEffect,
  fork,
  put,
  PutEffect,
  StrictEffect,
  takeEvery,
} from 'redux-saga/effects';
import {GET_USER_PROFILE} from './constant';
import {getUserProfileSuccess, getUserProfileFailed, Action} from './action';
import {getUserProfileApi} from './api';
import {navigationRef} from '../../navigation/RootNavigationRef';
// Generator<StrictEffect, void, any>
function* handleGetUserProfile(): Generator<
  CallEffect<any> | PutEffect<Action>,
  void,
  unknown
> {
  try {
    const userProfileData = yield call(() => getUserProfileApi());
    console.log('userprofileData', userProfileData);
    yield put(getUserProfileSuccess({data: 'data', message: 'message'}));
    navigationRef.current?.navigate('User');
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
