import React from 'react';
import {View, StyleSheet} from 'react-native';

const BackgroundView = ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  },
});

export default BackgroundView;
