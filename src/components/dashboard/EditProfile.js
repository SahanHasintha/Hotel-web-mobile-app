import React,{useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Input, Text, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import TextArea from 'react-native-textarea';
import {editMyProfile} from '../../actions/profile';

const MyProfile = ({profile:{myFrofile, loading}, editMyProfile}) => {
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
        if(myFrofile.description){
            myFrofile.description.forEach(element =>{
                str +=  element +"."
            })
        }

        !loading && setFormData({
            name: !loading || myFrofile.name !==null ? myFrofile.name :'',
            address: !loading || myFrofile.address !== null ? myFrofile.address : '',
            popularcity: !loading || myFrofile.popularcity !== null ? myFrofile.popularcity : '',
            todaybestoffer: !loading || myFrofile.todaybestoffer !== null ? myFrofile.todaybestoffer : '',
            phonenumber: !loading || myFrofile.phonenumber !== null ? myFrofile.phonenumber : '',
            description: !loading || myFrofile.description !== null ? str : '',
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