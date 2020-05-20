import React,{useState} from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Button} from 'react-native';
import {Text, Input, CheckBox} from 'react-native-elements';
import TextArea from 'react-native-textarea';

const AddRooms = () => {
    const [formData, setFormData] = useState({
        ac:false,
        price:'',
        category:''
    });

    const {ac} = formData;

    console.log(formData);

    return (    
        <ScrollView>
            <View style={styles.container}>
                <Text h3>Create Profile</Text>
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
