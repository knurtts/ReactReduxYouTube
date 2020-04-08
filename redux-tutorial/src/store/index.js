import {createStore} from 'redux';
import CombineReducers from './rootReducer';

const store = createStore(CombineReducers);

export default store;
