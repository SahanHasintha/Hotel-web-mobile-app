import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {logOut} from '../../actions/Auth';
import {useNavigation} from '@react-navigation/native';

const LogOut = ({logOut}) => {
    const navigation = useNavigation();
    return <View>
        <Button 
            title="LogOut"
            onPress={()=> logOut(()=>navigation.navigate('LoginFlow'))}
        />
    </View>
}

const styles = StyleSheet.create({

})

export default connect(null, {logOut})(LogOut);