import React, { Fragment } from 'react';

import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Linking } from 'react-native';
import Analytics from './Analytics'

function Screen1() {
    const openReceiverApp = () => {
      const params = {
        key1: 'value1',
      };
  
      // Convert parameters to query string
      const queryString = Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
        // const key=params.key1;
        const deepLink = `receiverapp://Screen/ReceiverScreen/sanjana`; // Use the correct scheme and screen path
        console.log('Deep Link:', deepLink);
        Linking.openURL(deepLink);
      };
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Home Screen</Text>
      //   <Button title="Open Receiver App" onPress={openReceiverApp} />
      // </View>
      <Fragment>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#fff"/> */}
      <Analytics />
    </Fragment>
    );
  }

  export default Screen1;