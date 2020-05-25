import React,{useState} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Input, Button, Text} from 'react-native-elements';
import {connect} from 'react-redux';
import TextArea from 'react-native-textarea';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../../config/firebase';
import {createProfile} from '../../actions/profile';

const CreateProfile = ({createProfile}) => {
    const [image,setImage]  = useState(null);
    const [formData, setFormData] = useState({
        name:'',
        address:'',
        popularcity:'',
        description:'',
        todaybestoffer:'',
        phonenumber:''
    })

    const {name, address, popularcity, description, todaybestoffer, phonenumber} = formData;

    const pickImage =async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              })
              if (!result.cancelled) {
                setImage(result.uri)
              }
        } catch (error) {
            console.log(error.message);
        }
        
    }

    const onSubmit =async () => {
        
        const response = await fetch(image);
        const blob = await response.blob();

        const ref = firebase.storage().ref().child('images/'+image);
        const snapshot = await ref.put(blob);
        snapshot.ref.getDownloadURL().then((downloadUrl)=>{
            if(downloadUrl){
                console.log(downloadUrl);
                const obj = {...formData, profilepicture:downloadUrl};
                createProfile(obj);
            }
        })
        blob.close();
        
    }

    return (    
        <ScrollView>
            <View style={styles.container}>
                <Text h3>Create Profile</Text>
                <Input 
                    placeholder="Enter Name" 
                    name="name"
                    onChangeText={(value)=> setFormData({...formData, name:value})}
                    />
                <Input 
                    placeholder="Enter Address" 
                    name="address"
                    onChangeText={(value)=> setFormData({...formData, address:value})}
                    />
                <Input 
                    placeholder="Enter Popular city" 
                    name="popularcity"
                    onChangeText={(value)=> setFormData({...formData, popularcity:value})}
                    />
                <Input 
                    placeholder="Enter today best offer" 
                    name="todaybestoffer"
                    onChangeText={(value)=> setFormData({...formData, todaybestoffer:value})}
                    />
                <Input 
                    placeholder="Enter phone number" 
                    name="phonenumber"
                    onChangeText={(value)=> setFormData({...formData, phonenumber:value})}
                    />
                
                <TouchableOpacity onPress={pickImage}>
                    <Text >Select the photo</Text>
                </TouchableOpacity>
                <TextArea 
                    placeholder="Enter description" 
                    onChangeText={(value)=> setFormData({...formData, description:value})}
                    />
                <Button title="Submit" onPress={()=> onSubmit()}/>
                {/* {image && <Image source={{uri:image}} style={{ width: 300, height: 300, alignSelf:'center'}}/>} */}
                
            </View> 
        </ScrollView>  
    )
}

const styles = StyleSheet.create({
    container:{
        margin:20,
        borderWidth:1,
        borderColor:'grey',
        padding:10
    }
})

 export default connect(null, {createProfile})(CreateProfile);