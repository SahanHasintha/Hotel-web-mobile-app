import { AsyncStorage } from "react-native";

const initialState ={
    token:AsyncStorage.getItem('token'),
    user:null,
    isAuthenticated:false,
    loading:true

}
export default (state = initialState, action) => {
    switch(action.type){
        case 'log_out':
            AsyncStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated:false,
                loading:true,
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