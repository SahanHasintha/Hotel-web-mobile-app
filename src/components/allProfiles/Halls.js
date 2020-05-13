import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Card, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {getProfileById} from '../../actions/profile';
import LoadingGif from '../layouts/loadinsGif';

const BanquetHalls = ({Id:{hotelId}, getProfileById, profile:{profile, loading}}) => {
    const navigation = useNavigation();

    useEffect(()=>{
        getProfileById(hotelId)
    },[])

    return (
        <View>
            {loading || profile ===null ? 
            <LoadingGif/> : 
            profile.weddinghall.length===0 ? 
            <Text>No Halls</Text>: 
            profile.weddinghall.map((hall, index)=>{
                return <Card  key={index} title={hall.hallname} >
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>navigation.navigate('imageViewer', {images:hall.hallimages, goBack:'halls'}) }>
                                    <Image source={{uri:hall.hallimages[0]}} style={styles.image} />
                                </TouchableOpacity>
                                <Text style={styles.marginTop}>{`Price : ${hall.price}`}</Text>
                                
                                <Text style={styles.description}>{hall.description}</Text>
                                <Text style={styles.marginTop}>{hall.included}</Text>
                            </View>
                            
                        </Card>
            })
            }
        </View>
    );
}

const styles = StyleSheet.create({

})

const mapStateToProps =(state) => {
    return {
        Id:state.id,
        profile:state.profile
    }
}

export default connect(mapStateToProps, {getProfileById})(BanquetHalls);