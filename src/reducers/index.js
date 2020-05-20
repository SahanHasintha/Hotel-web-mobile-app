import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile';
import id from './id';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth,
    profile,
    id,
    form:formReducer
})