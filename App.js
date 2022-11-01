import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserHomeView from './src/views/user/user_home_view';
import Init from './src/views/init';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false      
          }}>
        <Stack.Screen name="Home" component={Init} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;