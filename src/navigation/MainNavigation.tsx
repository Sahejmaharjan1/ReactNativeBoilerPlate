import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Text} from 'react-native';
import UserNavigator from './UserNavigation';
import {SafeAreaView} from 'react-native-safe-area-context';
import {isReadyRef, navigationRef} from './RootNavigationRef';

const AppNavigator = () => {
  const [boardingScreen, setBoardingScreen] = useState<null | boolean>(false);
  const [loading] = useState<boolean>(false);
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  useEffect(() => {
    // AsyncStorage.getItem('onboarding').then(val => {
    //   if (!val) {
    //     setBoardingScreen(true);
    //   } else {
    //     setBoardingScreen(false);
    //   }
    // });
  }, []);
  const skipOnBoarding = () => {
    setBoardingScreen(false);
  };
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      {loading === true || boardingScreen === null ? (
        <SafeAreaView>
          <Text>Loading</Text>
        </SafeAreaView>
      ) : boardingScreen ? (
        <SafeAreaView>
          <Text>OnBoardingScreen</Text>
          <Button onPress={skipOnBoarding} title="Skip" />
        </SafeAreaView>
      ) : (
        <UserNavigator />
      )}
    </NavigationContainer>
  );
};
export default () => <AppNavigator />;
