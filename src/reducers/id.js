import {HOTEL_ID} from '../actions/types'
const initialState = {
    hotelId:null
}

export default (state=initialState ,{type,payload})=>{
    switch(type){
        case HOTEL_ID:
            return {
                ...state,
                hotelId:payload
            }
        default :
            return state
    }
}