import Axios from '../config/Axios';
import {setAlert} from './Alert';
import {
    ALL_PROFILES, 
    PROFILE_ERROR,
    GET_PROFILE,
    GET_MYPROFILE
} from './types';


//!Create Profile
export const createProfile = (formData) =>async dispatch =>{
    try {
        const res = await Axios.post('/api/profile', formData);
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
    } catch (error) {
        const errors = error.response.data.errors;
        if(errors){
            errors.map(err => {
                dispatch(setAlert(err.msg));
            })
        }
    }
}


//!Get all profile
export const getAllProfiles = () =>async (dispatch) => {
    try {
        const res = await Axios.get('/api/profile');
        dispatch({
            type:ALL_PROFILES,
            payload:res.data
        })
    } catch (err) {
        console.log(err.message)
        dispatch({
            type:PROFILE_ERROR
        })
    }
}

//!Get profile by id
export const getProfileById = (id) => async dispatch =>{
    try {
        const res = await Axios.get(`/api/profile/hotel/${id}`)
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
    } catch (err) {
        console.log(err.message);
        dispatch({
            type:PROFILE_ERROR
        })
    }
}

//!Get My profile
export const getMyProfile = () => async dispatch => {
    try {
        const res = await Axios.get('/api/profile/myProfile');
        dispatch({
            type:GET_MYPROFILE,
            payload:res.data
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type:PROFILE_ERROR
        })
    }
}

//!Edit the profile
export const editMyProfile = (formData , callback) => async dispatch => {
    try {
        const res = await Axios.put('/api/profile/edit-profile', formData);
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        });
        callback()
    } catch (err) {
        console.log(err.message);
        const errors = err.response.data.errors
        if(errors){
            errors.map(err=> setAlert(err.msg));
        }
    }
}

//!Remove the room
export const removeRoom = (id, callback) => async dispatch => {
    try {
        await Axios.delete(`/api/profile/rooms/${id}`);
        callback();
    } catch (err) {
        console.log(err.message);
    }
}

//!Remove the food
export const removeFood = (id, callback) => async dispatch =>{
    try {
        await Axios.delete(`/api/profile/restuarant/${id}`);
        callback();
    } catch (err) {
        console.log(err.message);
    }
}

//!Add rooms to profile
