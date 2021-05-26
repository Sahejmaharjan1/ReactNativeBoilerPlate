import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';

const UserNavigation = createStackNavigator();

export default function UserNavigator() {
  return (
    <UserNavigation.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 24,
          borderColor: '#141414',
          borderBottomWidth: 1,
        },
      }}>
      <UserNavigation.Screen
        options={({}) => ({
          headerShown: true,
          title: 'Home',
        })}
        name="User"
        component={HomeScreen}
      />
    </UserNavigation.Navigator>
  );
}

const HomeScreen = () => {
  return (
    <View>
      <Text>Hello, Welcome to Create Some Amazing React Native app</Text>
    </View>
  );
};
