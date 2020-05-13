import React,{useEffect} from 'react';
import {View,StyleSheet, AsyncStorage} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {TryLocalLogin} from './actions/Auth';


const ResolveAuthScreen = ({TryLocalLogin}) => {
    const navigation = useNavigation();
    useEffect(()=>{
        TryLocalLogin(() => navigation.navigate('HomeFlow'), () => navigation.navigate('LoginFlow'))
    },[])

    return null;
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps, {TryLocalLogin})(ResolveAuthScreen);