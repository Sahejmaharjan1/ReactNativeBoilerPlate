import {combineReducers} from 'redux';
import testReducer from './test/reducer';

export const reducers = combineReducers({
  testReducer,
});

export type RootState = ReturnType<typeof reducers>;
