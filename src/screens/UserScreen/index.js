import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {BackgroundView} from '../../components';
import globalStyle from '../../theme/globalStyle';

export default class UserScreen extends Component {
  render() {
    return (
      <BackgroundView style={styles.centerItem}>
        <Text style={[globalStyle.h1, globalStyle.textColor]}>UserScreen</Text>
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
