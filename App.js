/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{Fragment} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import { NavigationContainer } from '@react-navigation/native';
import Analytics from './src/screens/Analytics';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// const firebaseConfig = {
//   apiKey: "AIzaSyBRTf7LVJO1nSXID1HF9QwE3FyPOuv1-3s",
//   authDomain: "chatappv2-4f842.firebaseapp.com",
//   databaseURL: "https://chatappv2-4f842-default-rtdb.firebaseio.com",
//   projectId: "chatappv2-4f842",
//   storageBucket: "chatappv2-4f842.appspot.com",
//   messagingSenderId: "249467052721",
//   appId: "1:249467052721:web:ef0aa24af9d6fb088b7890"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

const App =()=>{

  return(
  //   <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen name="Home" component={Screen1} />
  //     <Stack.Screen name="Details" component={Screen2} />
  //   </Stack.Navigator>
  // </NavigationContainer>
  <Fragment>
  {/* <StatusBar barStyle="dark-content" backgroundColor="#fff"/> */}
  <Analytics />
</Fragment>
  );
}

export default App;
