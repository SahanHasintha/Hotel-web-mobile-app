import React,{useState} from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Button} from 'react-native';
import {Text, Input, CheckBox} from 'react-native-elements';
import TextArea from 'react-native-textarea';
import {ImageBrowser} from 'expo-multiple-media-imagepicker';

const AddRooms = () => {
    const [formData, setFormData] = useState({
        ac:false,
        price:'',
        category:'',
        facilities:'',
        description:'',
    });

    const {ac} = formData;
    
    const onSubmitRoom = () => {
        console.log(formData);
    }

    return (    
        <ScrollView>
            <View style={styles.container}>
                <Text h3>Create Room</Text>
                <Input 
                    placeholder="Enter price" 
                    name="price"
                    onChangeText={(value)=>setFormData({...formData,price:value})}
                />
                <Input 
                    placeholder="Enter Category" 
                    name="Category"
                    onChangeText={(value)=>setFormData({...formData, category:value})}
                />
                <CheckBox 
                    title="A/C"
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={ac}
                    onPress={()=>{setFormData({...formData, ac : !ac})}}
                />
                <Input 
                    placeholder="Enter facilities" 
                    name="facilities"
                    onChangeText={(value)=>setFormData({...formData, facilities:value})}
                />

                <ImageBrowser
                    max={10}
                     
                />

                <Input 
                    placeholder="Enter description" 
                    name="description"
                    onChangeText={(value)=>setFormData({...formData, description:value})}
                />
                
                
                <Button
                    title="Add room"
                    onPress={()=> onSubmitRoom()}
                />
                
                
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
export default AddRooms;
