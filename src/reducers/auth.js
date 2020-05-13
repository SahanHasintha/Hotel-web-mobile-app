import { AsyncStorage } from "react-native";
import {USER_LOADED, AUTH_ERROR} from '../actions/types';

const initialState ={
    token:AsyncStorage.getItem('token'),
    user:null,
    isAuthenticated:false,
    loading:true,
    user:null
}
export default (state = initialState, action) => {
    switch(action.type){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated:true,
                loading:false,
                user:action.payload
            }
        case AUTH_ERROR:
        case 'log_out':
            AsyncStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated:false,
                loading:true,
                user:null,
                token:null
            }
        
        case 'login_success':
        case 'register_success':
            AsyncStorage.setItem('token', action.payload.token)
            return {...state, 
                    token:action.payload.token,
                    isAuthenticated:true,
                    loading:false
                };
        default:
            return state;
    }
}