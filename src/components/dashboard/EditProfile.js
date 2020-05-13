import React,{useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Input, Text, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import TextArea from 'react-native-textarea';
import {editMyProfile} from '../../actions/profile';

const MyProfile = ({profile:{profile, loading}, editMyProfile}) => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        name:'',
        address:'',
        popularcity:'',
        todaybestoffer:'',
        phonenumber:'',
        description:''
    })

    const {name, address, popularcity, todaybestoffer, phonenumber, description} = formData;
    
    useEffect(()=>{
        let str = ''
        if(profile.description){
            profile.description.forEach(element =>{
                str +=  element +"."
            })
        }

        !loading && setFormData({
            name: !loading || profile.name !==null ? profile.name :'',
            address: !loading || profile.address !== null ? profile.address : '',
            popularcity: !loading || profile.popularcity !== null ? profile.popularcity : '',
            todaybestoffer: !loading || profile.todaybestoffer !== null ? profile.todaybestoffer : '',
            phonenumber: !loading || profile.phonenumber !== null ? profile.phonenumber : '',
            description: !loading || profile.description !== null ? str : '',
        })
    },[]) 



    return (
        <ScrollView>
    <View style={styles.container}>
        <Text h3>Edit Profile</Text>
        <Input 
            placeholder="Enter Name" 
            name="name"
            onChangeText={(value)=> setFormData({...formData , name:value})}
            value={name}/>
        <Input 
            placeholder="Enter Address" 
            name="address"
            onChangeText={(value)=> setFormData({...formData , address:value})}
            value={address}/>
        <Input 
            placeholder="Enter Popular city" 
            name="popularcity"
            onChangeText={(value)=> setFormData({...formData , popularcity:value})}
            value={popularcity}/>
        <Input 
            placeholder="Enter today best offer" 
            name="todaybestoffer"
            onChangeText={(value)=> setFormData({...formData , todaybestoffer:value})}
            value={todaybestoffer}/>
        <Input 
            placeholder="Enter phone number" 
            name="phonenumber"
            onChangeText={(value)=> setFormData({...formData , phonenumber:value})}
            value={phonenumber}/>
        <TextArea 
            placeholder="Enter description" 
            onChangeText={(value)=> setFormData({...formData , description:value})}
            value={description}/>
        <Button title="Submit" onPress={()=> editMyProfile(formData, ()=>navigation.navigate('MyProfile'))}/>
    </View> 
    </ScrollView>  
    );
}

const styles = StyleSheet.create({
    container:{
        margin:20,
        borderWidth:1,
        borderColor:'grey',
        padding:10
    }
})

const mapStateToProps = (state) => {
    return {
        profile:state.profile
    }
}

export default connect(mapStateToProps, {editMyProfile})(MyProfile);