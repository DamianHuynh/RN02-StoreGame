import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {HomeScreen, StreamScreen, UserScreen} from '../screens';

const Tab = createBottomTabNavigator();

const RootTab = () => {
  const tabBarOptions = {
    style: {backgroundColor: '#819ee5', borderTopWidth: 0},
    showLabel: false,
  };
  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let iconName;
      const backgroundColor = '#819ee5';
      const size = focused ? 30 : 20;

      switch (route.name) {
        case 'HomeTab':
          iconName = 'home';
          break;
        case 'StreamTab':
          iconName = 'game-controller';
          break;
        case 'UserTab':
          iconName = 'user';
          break;

        default:
          break;
      }
      return (
        <View
          style={[
            styles.tabBarIconContent,
            {backgroundColor},
            focused && styles.active,
          ]}>
          <EntypoIcon name={iconName} size={size} color="#fff" />
        </View>
      );
    },
  });

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="StreamTab" component={StreamScreen} />
      <Tab.Screen name="UserTab" component={UserScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarIconContent: {
    height: 40,
    width: 40,
    alignItems: 'center',
    borderRadius: 20,
  },
  active: {
    position: 'absolute',
    bottom: 5,
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
  },
});

export default RootTab;
