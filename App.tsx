/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {

  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';
import Msg from './src/Msg';

export type RootStackParamList = {
  Home: undefined;
  Msg: {msg: string}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{
          title:"Home"
        }}
        />
        <Stack.Screen 
        name='Msg'
        component={Msg}
        options={{
          title:"Message Page"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    header: {
      color:"white",
      fontSize:70,
      fontWeight:200,
    }
});

export default App;
