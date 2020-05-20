import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import {Text, Card, Button, Avatar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {getMyProfile} from '../../actions/profile';
import LoadingGif from '../layouts/loadinsGif';


const {width, height} = Dimensions.get('window');
const MyProfile = ({getMyProfile, profile:{loading,myFrofile}}) => {

    const navigation = useNavigation()

    useEffect(()=>{
        getMyProfile();
    },[])


    return (
        <View>
            {loading ? 
                <LoadingGif/> :  
                myFrofile ===null ? 
                <Button type="outline" title="Create Profile" onPress={()=>navigation.navigate('CreateProfile')} /> :
                <Card title={myFrofile.name} >
                    <Avatar
                        source={{uri:myFrofile.profilepicture}}
                        showAccessory
                        style={styles.image}
                        onPress={() => console.log("Works!")}
                    />
                    <Button type="outline" title="Edit profile" onPress={()=> navigation.navigate('EditProfile')} />
                    <Button type="outline" title="Show Rooms" onPress={()=> navigation.navigate('ShowRooms')}/>
                    <Button type="outline" title="Update Rooms" onPress={()=> navigation.navigate('AddRoom')}/>
                    <Button type="outline" title="Show Foods"  onPress ={()=> navigation.navigate('ShowFoods')}/>
                    <Button type="outline" title="Update Foods"/>
                    <Button type="outline" title="Show Halls" onPress={()=>navigation.navigate('ShowHalls')}/>
                    <Button type="outline" title="Add Halls" onPress={()=>navigation.navigate('AddHalls')}/>
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

export default connect(mapStateToProps,{getMyProfile})(MyProfile);