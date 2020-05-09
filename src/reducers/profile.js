import {
    ALL_PROFILES, 
    PROFILE_ERROR, 
    GET_PROFILE
} from '../actions/types';

const initialState = {
    profiles:[],
    profile:null,
    loading:true
}

export default (state=initialState, {type, payload}) => {
    switch(type){
        case GET_PROFILE:
            return {
                ...state,
                loading:false,
                profile:payload
            }
        case ALL_PROFILES:
            return {
                ...state,
                profiles:payload,
                loading:false
            }
        default:
            return state;
    }
}