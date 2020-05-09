import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Feather} from '@expo/vector-icons';

import Login from './src/components/Auth/Login';
import Register from './src/components/Auth/Register';
import MyProfile from './src/components/dashboard/myProfile';
import AllItems from './src/components/allProfiles/profile';
import reducers from './src/reducers';
import ResolveAuthScreen from './src/ResolveAuthScreen';
import LogOut from './src/components/Auth/LogOut';
import ProfileItem from './src/components/allProfiles/profileItem';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

//Stack for hotel profile
const hotelProfile = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#30BBB2'}}}>
      <Stack.Screen name="all profiles" component={AllItems}/>
      <Stack.Screen  name="profileItem" component={ProfileItem}/>
    </Stack.Navigator>
  );
}

//*Set the header for ottom tab navigator
// const xxx = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="HomeFlow" 
//         component={HomeFlow}
//         options={{
//           headerStyle:{backgroundColor:'#30BBB2'}
//         }}
//       />
//     </Stack.Navigator>
//   )
// }

const HomeFlow = () => {
  return (
    <Tabs.Navigator screenOptions={({route})=> ({
      tabBarIcon:({color, size})=>{
        let iconName;
        if(route.name==='profiles'){
          iconName ='list'
        }else if(route.name==='My Profile'){
          iconName='home'
        }else if(route.name==='Log Out'){
          iconName='log-out'
        }
        return <Feather name={iconName} color={color} size={size}/>
      }
    })}
    tabBarOptions={{
      activeTintColor:'#30BBB2',
      inactiveTintColor:'grey'
    }}
    >
      <Tabs.Screen name="profiles" component={hotelProfile}/>
      <Tabs.Screen name="My Profile" component={MyProfile}/>
      <Tabs.Screen name="Log Out" component={LogOut}/>
    </Tabs.Navigator>
  );
}

const LoginFlow = () => {
  return (
  <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#30BBB2'}}}>
      <Stack.Screen name="Login Page" component={Login}/>
      <Stack.Screen name="Register Page" component={Register}/>
    </Stack.Navigator>
  );
}

const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="ResolveAuth" component={ResolveAuthScreen}/>
        <Stack.Screen  name="LoginFlow" component={LoginFlow}/>
        <Stack.Screen name="HomeFlow" component={HomeFlow}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}



export default App;
