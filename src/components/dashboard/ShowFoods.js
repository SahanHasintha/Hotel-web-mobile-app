import React,{useEffect} from 'react';
import {StyleSheet, View, Dimensions,Text , Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {getMyProfile, removeFood} from '../../actions/profile';
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const ShowFoods = ({getMyProfile , profile :{myFrofile, loading}, removeFood}) => {
    const navigation = useNavigation();
    useEffect(()=>{
        getMyProfile()
    },[])
    
    return (
        <Card title={"Foods"}>
        {!loading ?  myFrofile.restuarant.map((food, index) => {
                    return (
                        <View style={styles.mainContainer} key={index}>
                            <View style={styles.container}>
                                <Image source={{uri:food.foodImages[0]}} style={{width:80, height:65, marginRight:10}}/>
                                <View>
                                    <Text style={styles.header}>{food.foodname}</Text>
                                    <Text style={styles.subHeader}>{food.price}</Text>
                                    <Text style={styles.footer}>{food.description}</Text>
                                    
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>removeFood(food._id ,()=> navigation.navigate('MyProfile'))}>
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
        color:'#FA7373',
        width:220
    },
    icon:{
        color:'red'
    }
})

const mapStateToProps= (state) => {
    return {
        profile:state.profile
    }
}

export default connect(mapStateToProps, {getMyProfile, removeFood})(ShowFoods);