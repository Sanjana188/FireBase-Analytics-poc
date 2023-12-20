/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{Fragment,useEffect,useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import { NavigationContainer } from '@react-navigation/native';
import Analytics from './src/screens/Analytics';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import crashlytics from '@react-native-firebase/crashlytics';

async function onSignIn(user) {
  crashlytics().log('User signed in.');
  console.log("User signed in")
  await Promise.all([
    crashlytics().setUserId(user.uid),
    crashlytics().setAttribute('credits', String(user.credits)),
    crashlytics().setAttributes({
      role: 'admin',
      followers: '13',
      email: user.email,
      username: user.username,
    }),
  ]);
}

const Stack = createNativeStackNavigator();


const users = [];
const App =()=>{

  const [userCounts, setUserCounts] = useState(null);

  function updateUserCounts() {
    crashlytics().log('Updating user count.');
    try {
      if (users) {
        // An empty array is truthy, but not actually true.
        // Therefore the array was never initialised.
        setUserCounts(userCounts.push(users.length));
      }
    } catch (error) {
      crashlytics().recordError(error);
      console.log(error);
    }
  }

  useEffect(() => {
    crashlytics().log('App mounted.');
    if (users == true) setUserCounts([]);
    // updateUserCounts();
  }, []);



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
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',padding:20}}>
      <Button
        title="Sign In"
        onPress={() =>
          onSignIn({
            uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
            username: 'Joaquin Phoenix',
            email: 'phoenix@example.com',
            credits: 42,
          })
        }
      />
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
      <Button title="update count" onPress={() => updateUserCounts()} />
    </View>
    <View style={{ marginBottom:100,justifyContent: 'center', alignItems: 'center'}}>
    {
       userCounts? <Text>There are currently {userCounts[userCounts.length - 1]} users.</Text> : 
       <Text>Unable to display user information.</Text>
    }
    </View>
</Fragment>
  );
}

export default App;
