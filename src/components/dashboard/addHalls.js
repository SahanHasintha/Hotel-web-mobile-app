import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Field, reduxForm} from 'redux-form';


const submit =(values) => {
    console.log(values)
}

const renderInputs = ({lable}) => {
    return (
        <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center', padding:10}}>
            <Text>{lable} : </Text>
            <TextInput style={{borderColor:'grey', borderWidth:1, width:250,padding:5}}/>
        </View>
    )
}

const showHalls = (props) => {
    const {handleSubmit} = props;
    return(
        <View style={{flexDirection:'column'}}>
            <Field lable="Hall Name" name="hallname" component={renderInputs}/>
            <TouchableOpacity onPress={handleSubmit(submit)}>
                <Text style={{
                            alignSelf:'center', 
                            backgroundColor:'steelblue', 
                            color:'white',
                            paddingVertical:5,
                            paddingHorizontal:10
                        }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const showHall = reduxForm({
    form:'showHalls'
})(showHalls)

export default showHall;