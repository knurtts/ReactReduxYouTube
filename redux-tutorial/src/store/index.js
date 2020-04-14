import {createStore, applyMiddleware} from 'redux';
import CombineReducers from './rootReducer';
import thunk from "redux-thunk";
import {logger} from "redux-logger";

const store = createStore(CombineReducers, applyMiddleware(thunk, logger));

export default store;
