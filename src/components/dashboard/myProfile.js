import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import {Text, Card, Button, Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {getMyProfile} from '../../actions/profile';
import LoadingGif from '../layouts/loadinsGif';


const {width, height} = Dimensions.get('window');
const MyProfile = ({getMyProfile, profile:{loading,profile}}) => {
    const navigation = useNavigation()
    useEffect(()=>{
        getMyProfile();
    },[])
    return (
        <View>
            {loading ? 
                <LoadingGif/> :  
                profile ===null ? 
                <Text>Create profile</Text> :
                <Card title={profile.name} >
                    <Avatar
                        source={{uri:profile.profilepicture}}
                        showAccessory
                        style={styles.image}
                        onPress={() => console.log("Works!")}
                    />
                    <Button type="outline" title="Edit profile" onPress={()=> navigation.navigate('EditProfile')} />
                    <Button type="outline" title="Show Rooms" onPress={()=> navigation.navigate('ShowRooms')}/>
                    <Button type="outline" title="Update Rooms"/>
                    <Button type="outline" title="Show Foods"/>
                    <Button type="outline" title="Update Foods"/>
                    <Button type="outline" title="Show Halls"/>
                </Card>
            }
        </View>
        
    );
}

const styles = StyleSheet.create({
    image:{
        width:width-60,
        height:height/4
    },
    margintop:{
        marginTop:20,
        marginLeft:20
    }
})

const mapStateToProps=(state) => {
    return {
        profile:state.profile
    }
}

export default connect(mapStateToProps, {getMyProfile})(MyProfile);