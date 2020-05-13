import React,{useEffect} from 'react';
import {StyleSheet, BackHandler, Alert, FlatList, View, Image, TouchableOpacity} from 'react-native';
import {ListItem, Text, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getAllProfiles} from '../../actions/profile';
import {hotelId} from '../../actions/Id';


const Profile = ({getAllProfiles, profile:{profiles , loading}, hotelId}) => {
    const navigation = useNavigation();
    useEffect(()=>{
        getAllProfiles();
        //backAction function
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure want to go back?",[
                {
                    text:"cancel",
                    onPress:() => null,
                    style:"cancel"
                },
                {
                    text:"yes",
                    onPress:()=>BackHandler.exitApp()
                }
            ]);
            return true;
        };

        //Add the event listner
        const backHandler = BackHandler.addEventListener(
                'hardwareBackPress',
                backAction 
            );

            //finally remove event listner
            return () =>  backHandler.remove();
    },[]);

    return (
        <Card title={`Find your Dream location... `}>
            {
                profiles.map((profile, index)=>{
                    return (
                        <TouchableOpacity key={index} onPress={()=>hotelId(profile._id,() => navigation.navigate('Hotel Profile'))}>
                            <View style={styles.container}>
                                <Image source={{uri:profile.profilepicture}} style={{width:80, height:65}}/>
                                <View style={styles.text}>
                                    <Text style={styles.header}>{profile.name}</Text>
                                    <Text style={styles.subHeader}>{profile.address}</Text>
                                    <Text style={styles.footer}>{profile.popularcity}</Text>
                                </View>
                                
                            </View>
                        </TouchableOpacity>
                        
                    );
                })
            }
        </Card>
    );

    //*Doing using FlatList
    // return (
    //     <View>
    //     <Text h3>Find one</Text>
    //     <FlatList
    //         data={profiles}
    //         keyExtractor={(item)=>item._id}
    //         renderItem={({item})=> {
    //             return (
    //                 <ListItem
    //                     style={styles.container}
    //                     title={item.name}
    //                     subtitle={item.address}
    //                     leftAvatar={{ source: {uri :item.profilepicture}}}
    //                     bottomDivider
    //                     chevron
    //                 />
    //             )
    //         }}
    //     />
    //     </View>
    // );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginBottom:10,
        paddingBottom:10
    },
    text:{
        paddingLeft:10,
        
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
    }
})

const mapStateToProps =(state) => {
    return {
        profile:state.profile
    }
}

export default connect(mapStateToProps, {getAllProfiles, hotelId})(Profile);