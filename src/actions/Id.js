import {HOTEL_ID} from './types';
export const hotelId = (id, callback) =>async dispatch => {
    dispatch({
        type:HOTEL_ID,
        payload:id
    });
    callback();

}