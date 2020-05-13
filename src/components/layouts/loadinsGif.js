import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import loadingGif from './LoadingGif2.gif'

const LoadingGif = () => {
    return (
        <Image style={styles.gif} source={loadingGif} />
    )
}

const styles = StyleSheet.create({
    gif:{
        width:100 , 
        height:100,
        margin:'auto', 
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default LoadingGif;