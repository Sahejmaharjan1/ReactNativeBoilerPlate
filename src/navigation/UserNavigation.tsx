import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {Button, Text, View} from 'react-native';
import {getUserProfile} from '../redux/test/action';
import {useDispatch} from 'react-redux';
export type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
};
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
        name="Home"
        component={HomeScreen}
      />
      <UserNavigation.Screen
        options={({}) => ({
          headerShown: true,
          title: 'User',
        })}
        name="User"
        component={UserScreen}
      />
    </UserNavigation.Navigator>
  );
}
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation?: ProfileScreenNavigationProp;
};
const HomeScreen = ({}: Props) => {
  //   const naviagte = () => {
  //     navigation.navigate('Feed', {sort: 'latest'});
  //   };
  const dispatch = useDispatch();
  const navigateSaga = () => {
    dispatch(getUserProfile());
  };
  return (
    <View>
      <Text>Hello, Welcome to Create Some Amazing React Native app</Text>
      <Button title="navigate with saga" onPress={navigateSaga} />
    </View>
  );
};

const UserScreen = ({}: Props) => {
  //   const naviagte = () => {
  //     navigation.navigate('Feed', {sort: 'latest'});
  //   };
  return (
    <View>
      <Text>Hello, Welcome to User Navigation from saga</Text>
    </View>
  );
};
