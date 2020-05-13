import React from 'react';
import {StyleSheet, View,Text,  Image, Dimensions, Button} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {useNavigation} from '@react-navigation/native';
import {FastImage} from 'react-native-fast-image';

const {width, height} = Dimensions.get('window');

const ImageView = ({route}) => {
    const navigation = useNavigation();
    const images = route.params.images;
    return (
        <View>
            <SliderBox 
                ImageComponent={FastImage}
                images={images} 
                dotColor="#30BBB2"
                circleLoop
                paginationBoxVerticalPadding={20}
                paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10
                  }}
            />
            <Button title="go back" onPress={()=>navigation.navigate(route.params.goBack)} styles={styles.button}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:width-60,
        height:height/3
    },
    button:{
        backgroundColor:'#30BBB2'
    }
    
})

export default ImageView;