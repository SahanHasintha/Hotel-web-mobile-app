import React, { useEffect } from 'react';
import {StyleSheet, View, Image, FlatList} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {connect} from 'react-redux';
import {getProfileById} from '../../actions/profile';
import LoadingGif from '../layouts/loadinsGif';
import { Feather } from '@expo/vector-icons'; 
import Unorderedlist from 'react-native-unordered-list';

const ProfileItem = ({route, getProfileById , profile:{profile,loading}, id:{hotelId}}) => {
    useEffect(()=>{
        getProfileById(hotelId)
    },[])
    return (
        <View >
            
            {loading || profile ===null ? <LoadingGif/> : 
            <Card 
                title={profile.name}
                
            >
                <Text>Find your dreame location in <Text style={styles.popularcity}>{profile.popularcity}</Text></Text>
                <Image source={{uri:profile.profilepicture}} style={styles.image} resizeMode="cover" />
                <Text style={styles.contact}>
                    <Feather name="phone-call" size={20} color="black" />
                    Contact us: 
                    <Text style={styles.phonenumber}>
                        {profile.phonenumber}
                    </Text>
                </Text>
                <Text style={styles.address}>Address : <Text style={styles.black}>{profile.address}</Text></Text>
                <View >
                    <Text style={styles.description}>About us:</Text>
                    {profile.description.map((desc, index)=> <Unorderedlist key={index}><Text>{desc}</Text></Unorderedlist>)}
                </View>
                
            
            </Card>
             }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red'
    },
    image:{
        width:'100%',
        height:300
    },
    popularcity:{
        fontSize:20,
        fontWeight:"bold"
    },
    contact:{
        marginVertical:5,
        color:'grey'
    },
    phonenumber:{
        color:'green',
        fontWeight:"bold"
    },
    description:{
        marginTop:5,
        color:'grey'
    },
    address:{
        color:'grey'
    },
    black:{
        color:'black'
    }
})

const mapStateToProps = (state) => {
    return {
        profile:state.profile,
        id:state.id
    }
}

export default connect(mapStateToProps, {getProfileById})(ProfileItem);