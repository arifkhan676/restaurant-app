
import { rootReducer } from './Reducer';
import { createStore } from 'redux';

const myStore = createStore(rootReducer);

export default myStore;