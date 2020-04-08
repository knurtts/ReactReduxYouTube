import {combineReducers} from 'redux';
import diamondReducer from './diamond/reducer';

export default combineReducers({
    diamond: diamondReducer
});