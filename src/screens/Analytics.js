import React, { Component } from 'react';
import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';
// import { initializeApp } from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
} from 'react-native';

function Separator() {
    return <View style={styles.separator} />;
  }

const User = {
    uid :'10010id',
    balance : '1000'
}

// const firebaseConfig = {
//     apiKey: "AIzaSyD8QuJOynOzhxFRh0IB8iGL4tD4fahC1J0",
//     authDomain: "fbanalytics-35987.firebaseapp.com",
//     projectId: "fbanalytics-35987",
//     storageBucket: "fbanalytics-35987.appspot.com",
//     databaseURL: 'https://fbanalytics-35987-default-rtdb.firebaseio.com/',
//     messagingSenderId: "970428479188",
//     appId: "1:970428479188:web:77c9b623739bcf3a8d2d41",
//     measurementId: "G-B52QRYRZLZ"
//   };
  
// //   // Initialize Firebase
//    firebase.initializeApp(firebaseConfig);

export default class Analytics extends Component {

   
    async componentDidMount() {
        await firebase.app();
        // analytics().setCurrentScreen('Analytics');
        analytics().logScreenView({
            screen_name: 'Analytics',
            screen_class: 'Analytics'
        });
    }


    async addCustomEvent() {
        await analytics().logEvent('custom_event', {
            id: '123123',
            value: {
                name:'sanjana',
                id:'1456'
            },
            variable: 'variable',
        });
        console.log("custom event");
    }

    async onSignIn() {
        await Promise.all([
            analytics().setUserId(User.uid),
            analytics().setUserProperty('account_balance', User.balance),
        ]);
        console.log("onSingIn");
    }

    async onSignOut() {
        await analytics().resetAnalyticsData();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>
                    To log a custom event, use the logEvent method:
        </Text>
                    <Button
                        title="Add custom event"
                        onPress={() => this.addCustomEvent()}
                    />
                </View>
                <Separator />
                <View>
                    <Text style={styles.title}>
                    User data can be attached to analytical events via the setUserId, setUserProperties and setUserProperty methods. Each Firebase project can have up to 25 uniquely named (case-sensitive) user properties.
        </Text>
                    <Button
                        title="Set User"
                        color="#f194ff"
                        onPress={() => this.onSignIn()}
                    />
                </View>
                <Separator />
                <View>
                    <Text style={styles.title}>
                    In some cases, resetting all analytics data is required on certain events such as signing out of the application. To achieve this call the resetAnalyticsData method.
        </Text>
                    <Button
                        title="Reset Analyticss Data"
                        
                        onPress={() => this.resetAnalyticsData()}
                    />
                </View>
                <Separator />
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 44,
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});