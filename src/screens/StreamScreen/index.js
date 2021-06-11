import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import globalStyle from '../../theme/globalStyle';
import {BackgroundView} from '../../components';

export default class StreamScreen extends Component {
  render() {
    return (
      <BackgroundView style={styles.centerItem}>
        <Text style={[globalStyle.h1, globalStyle.textColor]}>
          StreamScreen
        </Text>
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
