import {all} from 'redux-saga/effects';
import testSaga from './test/saga';

export default function* rootSaga(): Generator {
  yield all([testSaga()]);
}
