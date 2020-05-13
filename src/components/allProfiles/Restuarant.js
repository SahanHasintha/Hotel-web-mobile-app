import React,{useEffect} from 'react';
import {View, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Card, Text} from 'react-native-elements';
import {getProfileById} from '../../actions/profile';
import LoadingGif from '../layouts/loadinsGif';

const {width, height} = Dimensions.get('window');

const Restuarant = ({id:{hotelId}, getProfileById , profile:{loading , profile}}) => {
    const navigation = useNavigation();
    useEffect(()=>{
        getProfileById(hotelId)
    },[])
    return (
    <ScrollView>
        <View  style={styles.container}>
                
                    {loading|| profile===null  ? <LoadingGif /> :  profile.restuarant.length ===0  ? <Text>There is no foods</Text> : profile.restuarant.map((food, index) => {
                        return <Card  key={index} title={food.foodname}>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>navigation.navigate('imageViewer', {images:food.foodImages, goBack:'foods'})}>
                                    <Image source={{uri:food.foodImages[0]}} style={styles.image}/>
                                </TouchableOpacity>
                                
                                <Text style={styles.marginTop}>{`Price : ${food.price}`}</Text>
                                
                                <Text style={styles.description}>{food.description}</Text>
                                
                            </View>
                            
                        </Card>
                })
            }
            
        </View>
    </ScrollView>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    description:{
        color:'grey',
        marginTop:5
    },
    marginTop:{
        marginTop:5
    },
    image:{
        width:width-60,
        height:height/3,
        borderRadius:15
    }
})

const mapStateToProps = (state) => {
    return {
        id:state.id,
        profile:state.profile
    }
}

export default connect(mapStateToProps, {getProfileById})(Restuarant);