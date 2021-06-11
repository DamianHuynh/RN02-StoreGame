import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RootTab from './rootTab';
import {DetailScreen} from '../screens';

const Stack = createStackNavigator();
const navigationRef = React.createRef();

export const navigationWithoutProps = (name, params) => {
  if (navigationRef.current) {
    console.log(navigationRef.current);
    navigationRef.current.navigate(name, params);
  }
};

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="RootTab" component={RootTab} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
