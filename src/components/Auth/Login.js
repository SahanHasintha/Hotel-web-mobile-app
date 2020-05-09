import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet,View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Input,Text, Button} from 'react-native-elements';
import {LoginUser} from '../../actions/Auth';
import { set } from 'react-native-reanimated';


const Login = ({LoginUser}) => {
    const [formData, setFormData]= useState({
        email:'',
        password:''
    })

    const {email, password} = formData;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text h3>Login Page</Text>
            <Input 
                style={styles.input}
                placeholder="Email"
                autoCapitalize='none'
                autoCorrect={false}
                 onChangeText={(value)=> setFormData({...formData,email:value})}
            />
            <Input 
                 style={styles.input}
                placeholder="Password"
                autoCapitalize='none'
                autoCorrect={false}
                 onChangeText={(value)=> setFormData({...formData,password:value})}
            />
            <Button 
                title="Login"
                onPress={()=>LoginUser(formData, ()=>{navigation.navigate('HomeFlow')})}
            />
            <TouchableOpacity onPress={()=> navigation.navigate('Register Page')}>
                <Text >If you have not account please sign in</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderColor:'#6C6C6C',
        borderWidth:10,
        flex:1,
        backgroundColor:'#DCDCDC',
        alignItems:'center',
        margin:15
    },
    input:{
        marginHorizontal:15
    }
})

export default connect(null, {LoginUser})(Login);