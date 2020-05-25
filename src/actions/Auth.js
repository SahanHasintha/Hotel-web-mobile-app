import Axios from '../config/Axios';
import setAuthToken from '../utils/setAuthToken';
import { AsyncStorage } from 'react-native';
import {USER_LOADED, AUTH_ERROR} from './types';

//!LogOut
export const logOut = (callback) => async dispatch => {
    dispatch({
        type:'log_out'
    })
    callback();
}
//!Try local login
export const TryLocalLogin = (callback01, callback02) =>async dispatch => {
    const token =await AsyncStorage.getItem('token');
        if(token){
            console.log(token)
            setAuthToken(token);
            callback01();
        }else{
            callback02();
        }

        try {
            const res = await Axios.get('/api/auth');
            console.log(res.data);
            dispatch({
                type:USER_LOADED,
                payload:res.data
            })
            
        } catch (err) {
            console.log(err.message)
            dispatch({
                type:AUTH_ERROR
            })
            
        }
    
    
}
//!User login
export const LoginUser = (formData , callback) =>async dispatch => {
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }
    const obj = JSON.stringify(formData)
    try {
        const res = await Axios.post('/api/auth', formData ,config);
        dispatch({
            type:'login_success',
            payload:res.data
        });
        dispatch(TryLocalLogin());
        callback();
    } catch (err) {
        const errors = err.response.data.errors;
        dispatch({
            type:'registration_error'
        })
    }
}

//!User Register
export const UserRegister = (formData, callback) => async dispatch => {
    const config={
        headers:{
            "Content-Type":"application/json"
        }
        
    }
    try {
        const res = await Axios.post('/api/user', formData, config);
        dispatch({
            type:'register_success',
            payload:res.data
        })
        dispatch(TryLocalLogin());
        callback();
    } catch (err) {
    }
}
