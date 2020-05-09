import Axios from '../config/Axios';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import { AsyncStorage } from 'react-native';


//!LogOut
export const logOut = (callback) => async dispatch => {
    dispatch({
        type:'log_out'
    })
    callback();
}
//!Try local login
export const TryLocalLogin = (callback01,callback02) =>async dispatch => {
    const token =await AsyncStorage.getItem('token');
    if(token){
        dispatch({
            type:'login_success',
            payload:token
        })
        callback01()
    }else{
        callback02()
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
        console.log(res.data)
        dispatch({
            type:'login_success',
            payload:res.data
        });
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
        callback();
    } catch (err) {
    }
}