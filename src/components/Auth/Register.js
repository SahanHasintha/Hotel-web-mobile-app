import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet,View, TouchableOpacity} from 'react-native';
import {Input,Text, Button} from 'react-native-elements';
import {UserRegister} from '../../actions/Auth';
import {useNavigation} from '@react-navigation/native';

const Login = ({UserRegister}) => {
    const navigation = useNavigation()

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:''
    })
    return (
        <View style={styles.container}>
            <Text h3>Registration Page</Text>
            <Input 
                style={styles.input}
                placeholder="Name"
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(value)=>setFormData({...formData, name:value})}
            />
            <Input 
                style={styles.input}
                placeholder="Email"
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(value)=>setFormData({...formData, email:value})}
            />
            <Input 
                 style={styles.input}
                placeholder="Password"
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(value)=>setFormData({...formData, password:value})}
            />
            <Button 
                title="Register"
                onPress={()=>UserRegister(formData,
                    ()=>{navigation.navigate('HomeFlow')}
                    )}
            />
            <TouchableOpacity onPress={()=> navigation.navigate('Login Page')}>
                <Text >If you have a account please Login</Text>
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

export default connect(null, {UserRegister})(Login);