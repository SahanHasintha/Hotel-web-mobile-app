import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile';
import id from './id'

export default combineReducers({
    auth,
    profile,
    id
})