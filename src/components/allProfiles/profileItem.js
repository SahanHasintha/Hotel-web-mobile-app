import React, { useEffect } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {getProfileById} from '../../actions/profile';
import LoadingGif from '../layouts/loadinsGif';


const ProfileItem = ({route, getProfileById , profile:{profile,loading}}) => {
    useEffect(()=>{
        getProfileById(route.params.id)
    },[])
    return (
        <View>
            {loading || profile ===null ? <LoadingGif/> : 
            <Card 
                title={profile.name}
            >
                <Image source={{uri:profile.profilepicture}} width={100} />
            <Text>{profile.description}</Text>
            </Card>
             }
        </View>
    )
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => {
    return {
        profile:state.profile
    }
}

export default connect(mapStateToProps, {getProfileById})(ProfileItem);