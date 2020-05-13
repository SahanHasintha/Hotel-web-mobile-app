import React,{useEffect} from 'react';
import {View, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Card, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {getProfileById} from '../../actions/profile';
import LoadingGif from '../layouts/loadinsGif';

const {width, height} = Dimensions.get('window');

const Rooms = ({id:{hotelId}, getProfileById , profile:{loading , profile}}) => {
    const navigation = useNavigation();
    useEffect(()=>{
        getProfileById(hotelId)
    },[])
    return (
    <ScrollView>
        <View  style={styles.container}>
                
                    {loading || profile ===null ? <LoadingGif /> :profile.rooms.length===0?<Text>No rooms</Text> : profile.rooms.map((room, index) => {
                        return <Card  key={index}>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>navigation.navigate('imageViewer', {images:room.images, goBack:'rooms'}) }>
                                    <Image source={{uri:room.images[0]}} style={styles.image} />
                                </TouchableOpacity>
                                <Text style={styles.marginTop}>{`Price : ${room.price}`}</Text>
                                {room.ac ? <Text style={styles.marginTop}>
                                        A/C room
                                    </Text>: 
                                    <Text style={styles.marginTop}>
                                        Non A/C room
                                    </Text>}
                                <Text style={styles.description}>{room.description}</Text>
                                <Text style={styles.marginTop}>{room.facilities}</Text>
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

export default connect(mapStateToProps, {getProfileById})(Rooms);