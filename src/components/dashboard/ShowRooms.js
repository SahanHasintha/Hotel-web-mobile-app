import React,{useEffect} from 'react';
import {StyleSheet, View,Text , Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {removeRoom} from '../../actions/profile';

const ShowRooms = ({profile:{profile, loading}, removeRoom}) => {
    const navigation = useNavigation();
    return (<Card title={"Rooms"}>
        {!loading ?  profile.rooms.map((room, index) => {
                    return (
                        <View style={styles.mainContainer} key={index}>
                            <View style={styles.container}>
                                <Image source={{uri:room.images[0]}} style={{width:80, height:65}}/>
                                <View>
                                    <Text style={styles.header}>{room.price}</Text>
                                    <Text style={styles.subHeader}>{room.category}</Text>
                                    {room.ac === true ? 
                                    <Text style={styles.footer}>A/C</Text>: 
                                    <Text style={styles.footer}>Non A/C</Text>
                                    }
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>removeRoom(room._id, ()=> navigation.navigate('MyProfile'))}>
                                <AntDesign name="delete" size={35} style={styles.icon}/>
                            </TouchableOpacity>
                        </View>
                        
                   
                    )
                })
             :<Text>Loading...</Text>}
    </Card>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        marginBottom:10,
        flexDirection:'row',
        borderBottomColor:'grey',
        borderBottomWidth:1,
        justifyContent:'space-between',
        paddingBottom:10
    },
    container:{
        flexDirection:'row',
    },
    header:{
        fontSize:18,
        fontWeight:"bold"
    },
    subHeader:{
        color:'grey'
    },
    footer:{
        color:'#FA7373'
    },
    icon:{
        color:'red'
    }
})

const mapStateToProps = (state) => {
    return {
        id:state.id,
        profile:state.profile
    }
}

export default connect(mapStateToProps, {removeRoom})(ShowRooms);