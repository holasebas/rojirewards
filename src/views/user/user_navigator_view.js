import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,MaterialIcons,FontAwesome5 } from '@expo/vector-icons'; 
import UserHomeView from './user_home_view';
import { st } from '../../styles/utils';
import { colors } from '../../styles/colors';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      
    </View>
  );
}
function RojiScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Roji!</Text>
      </View>
    );
}
  
function NotificationsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notificaciones!</Text>
      </View>
    );
}
  
function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
}
  

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function UserNavigatorView() {
  return (
  
      <Tab.Navigator  screenOptions={
        
        ({ route }) => ({
        tabBarStyle:{backgroundColor:"#000"},
        headerShown:false,
        
        tabBarIcon: ({ focused, color, size }) => {
            

          switch(route.name){
            case 'user_home_view':
                return  <MaterialIcons name="home" size={24} color={focused? '#E2076A' : '#CCC'} />;
            case 'user_roji_view':
                return  <FontAwesome5 name="store" size={18}  color={focused? '#E2076A' : '#CCC'}   />;
            case 'user_notificatios_view':
                return  <Ionicons name="notifications" size={24}  color={focused? '#E2076A' : '#CCC'}   />
            case 'user_profile_view':
                return  <Ionicons name="settings" size={22}  color={focused? '#E2076A' : '#CCC'}   />;
            case 'user_settigns_view':
                return  <Ionicons name="person-circle" size={24}  color={focused? '#E2076A' : '#CCC'}   />;
            default: <View></View>
          }

        //   if (route.name === 'Home') {
        //     iconName = focused
        //       ? 'ios-information-circle'
        //       : 'ios-information-circle-outline';
        //   } else if (route.name === 'Settings') {
        //     iconName = focused ? 'ios-list-box' : 'ios-list';
        //   }

          // You can return any component that you like here!
          //return <MaterialIcons name="home" size={24} color="black" />;
        },
        tabBarActiveTintColor: '#E2076A',
        tabBarInactiveTintColor: '#CCC',
       
      })}>
        <Tab.Screen name="user_home_view" options={{ tabBarLabel:'Inicio' }} component={UserHomeView} />
        <Tab.Screen name="user_roji_view" options={{ tabBarLabel:'Roji' }}  component={SettingsScreen} />
        <Tab.Screen name="user_notificatios_view"  options={{ tabBarLabel:'Notficaciones' }}  component={HomeScreen} />
        <Tab.Screen name="user_profile_view"  options={{ tabBarLabel:'Config.' }}  component={SettingsScreen} />
        <Tab.Screen name="user_settigns_view"  options={{ tabBarLabel:'Perfil' }}  component={HomeScreen} />
      
      </Tab.Navigator>
  
  );
}