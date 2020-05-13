import {Alert} from 'react-native';

export const setAlert = (msg) => {
    Alert.alert(
        'Title',
        msg,[
            {
                text:"ok",
                style:'cancel'
            }
        ]
    )
}