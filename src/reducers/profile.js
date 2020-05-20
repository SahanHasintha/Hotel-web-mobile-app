import {
    ALL_PROFILES, 
    PROFILE_ERROR, 
    GET_PROFILE,
    GET_MYPROFILE
} from '../actions/types';

const initialState = {
    profiles:[],
    profile:null,
    myFrofile:null,
    loading:true
}

export default (state=initialState, {type, payload}) => {
    switch(type){
        case GET_MYPROFILE:
            return {
                ...state,
                loading:false,
                myFrofile:payload
            }
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