import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {BackgroundView} from '../../components';

export default class DetailScreen extends Component {
  render() {
    console.log(this.props.route.params);
    return (
      <BackgroundView>
        <Text> textInComponent </Text>
      </BackgroundView>
    );
  }
}
