import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const middlewares = [
    createLogger()
];

export default createStore (
    rootReducer,
    //2nd arg is initial state
    undefined,
    compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));