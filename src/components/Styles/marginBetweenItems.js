import React from 'react';
import {StyleSheet, View} from 'react-native';

const MarginBetweenItems = ({children}) =>{
    return (
        <View style={Styles.container}>
            {children}
        </View>
    );
}

const Styles = StyleSheet.create({
    container:{
        margin:15
    }
})

export default MarginBetweenItems;