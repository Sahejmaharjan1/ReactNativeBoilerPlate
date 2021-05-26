import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {reducers as rootReducer} from './reducers';
import rootSaga from './sagas';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

const storeObj = configureStore();
export {storeObj};
