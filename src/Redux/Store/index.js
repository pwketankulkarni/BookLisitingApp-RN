import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Reducers';
// import rootSaga from '../Sagas';

// const sagaMiddleware = createSagaMiddleware();
const middleware = [];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

export default createStore(rootReducer, applyMiddleware(...middleware));

// sagaMiddleware.run(rootSaga);