import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './saga';
 
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
 
export function configureStore(initialState: {}): {
    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middlewares)));
    sagaMiddleware.run(rootSaga);
    return store;
}

