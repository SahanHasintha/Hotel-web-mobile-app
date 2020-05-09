import Axios from '../config/Axios';
import {
    ALL_PROFILES, 
    PROFILE_ERROR,
    GET_PROFILE
} from './types';

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