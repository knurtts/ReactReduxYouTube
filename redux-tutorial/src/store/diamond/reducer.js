//reducers are functions with two params: state, initial state, and the rest is an action object
import * as Actions from './actionTypes';

const initalState = {
    diamonds: 0,
    loading: false,
    error: null,
    names:[]
}

const diamondReducer = (state = initalState, action) => {
    switch(action.type) {
        case Actions.MINE_DIAMOND :
            return {
                ...state,
                diamonds: action.payload
            };
        
        case Actions.FETCH_DATA:
            return {
                ...state,
                loading: true
            };
        
        case Actions.SUCCESS_DATA:
            return {
                ...state,
                loading: false,
                names: action.payload
            };

        case Actions.FAILED_DATA:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
       
        default:
            return state;
    }
};

export default diamondReducer;