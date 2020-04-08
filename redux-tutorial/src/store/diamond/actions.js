import * as Actions from './actionTypes';

//actions
// const minedDiamond = {
//     type: "MINE_DIAMOND"
// }

//action creator
export const minedDiamond = (addDiamond) => ({
    type: Actions.MINE_DIAMOND,
    payload: addDiamond
})