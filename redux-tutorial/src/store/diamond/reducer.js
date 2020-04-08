//reducers are functions with two params: state, initial state, and the rest is an action object
import * as Actions from './actionTypes';

const initalState = {
    diamonds: 0
}

const diamondReducer = (state = initalState, action) => {
    switch(action.type) {
        case Actions.MINE_DIAMOND :
            return {
                ...state,
                diamonds: action.payload
            }
        default:
            return state;
    }
};

export default diamondReducer;