import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid, StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  useEffect(() => {
    const requestUserPermission = async () => {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        const token = await messaging().getToken();
        console.log('FCM token:', token);
      }
    };

    requestUserPermission();
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>teste</Text>
      <Text style={[styles.sectionDescription]}>teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
