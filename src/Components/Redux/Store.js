import { createStore } from 'redux';
import { rootReducer } from './Reducer'
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const myStore = createStore(rootReducer, applyMiddleware(logger, thunk));

export default myStore;