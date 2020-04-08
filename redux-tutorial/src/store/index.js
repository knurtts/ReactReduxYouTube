import {createStore} from 'redux';
import CombineReducers from './rootReducer';

export const store = createStore(CombineReducers);
