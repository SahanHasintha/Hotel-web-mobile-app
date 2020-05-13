import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
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
import AboutUsHotel from './src/components/allProfiles/AboutUsHotel';
import Rooms from './src/components/allProfiles/Rooms';
import Restuarant from './src/components/allProfiles/Restuarant';
import PhotoViewer from './src/components/allProfiles/PhotoViewer';
import Halls from './src/components/allProfiles/Halls';
import EditProfile from './src/components/dashboard/EditProfile';
import ShowRooms from './src/components/dashboard/ShowRooms';
import ShowFoods from './src/components/dashboard/ShowFoods';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

const AllItemsHeader= () => {
  return <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#30BBB2'}}}>
    <Stack.Screen name="AllItems" component={AllItems}/>
  </Stack.Navigator>
}

const MyProfileItems = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#30BBB2'}}}>
      <Stack.Screen name="MyProfile" component={MyProfile}/>
      <Stack.Screen name="EditProfile" component={EditProfile}/>
      <Stack.Screen name="ShowRooms" component={ShowRooms}/>
      <Stack.Screen name="ShowFoods" component={ShowFoods}/>
    </Stack.Navigator>
  )
}

const Room = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name ="rooms" component={Rooms}/>
      <Stack.Screen name="imageViewer" component={PhotoViewer}/>
    </Stack.Navigator>
  );
}

const Food = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name ="foods" component={Restuarant}/>
      <Stack.Screen name="imageViewer" component={PhotoViewer}/>
    </Stack.Navigator>
  );
}

const Hall = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name ="halls" component={Halls}/>
      <Stack.Screen name="imageViewer" component={PhotoViewer}/>
    </Stack.Navigator>
  );
}

const HotelProfileTopTabs = () => {
  return (
    <TopTabs.Navigator tabBarOptions={{
      activeTintColor:'#30BBB2',
      inactiveTintColor:'grey'
    }}>
      <TopTabs.Screen name="Aboutus" component={AboutUsHotel}/>
      <TopTabs.Screen name="Rooms" component={Room}/>
      <TopTabs.Screen name="Foods" component={Food}/>
      <TopTabs.Screen name="Halls" component={Hall}/>
    </TopTabs.Navigator>
  );
}



const BottomTab = () => {
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
      <Tabs.Screen name="profiles" component={AllItemsHeader}/>
      <Tabs.Screen name="My Profile" component={MyProfileItems}/>
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

const HomeFlow = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{headerShown:false}} name="All Profiles" component={BottomTab}/>
      <Stack.Screen options={{headerStyle:{backgroundColor:'#30BBB2'}}} name="Hotel Profile" component={HotelProfileTopTabs}/>
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
