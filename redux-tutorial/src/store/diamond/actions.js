import * as Actions from './actionTypes';

//action creators
export const minedDiamond = (addDiamond) => ({
    type: Actions.MINE_DIAMOND,
    payload: addDiamond
});

export const getData = () => {
    return (dispatch) => {
        dispatch({
            type: Actions.FETCH_DATA
        });
        
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log("The data type is "+typeof data);
                dispatch({
                    type: Actions.SUCCESS_DATA,
                    payload: data
                });
            }).catch((err) => {
                dispatch({
                    type: Actions.FAILED_DATA,
                    payload: err
                });
            });
    };
};