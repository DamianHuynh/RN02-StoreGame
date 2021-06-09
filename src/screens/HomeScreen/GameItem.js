import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
const {with: screenWith} = Dimensions.get('window');

export default class GameItem extends Component {
  render() {
    const {gameItem} = this.props;
    return (
      <View>
        <Image source={{uri: gameItem.preview[0]}} style={styles.gameBanner} />
        <View
          style={[
            styles.gameInfo,
            {backgroundColor: gameItem.backgroundColor},
          ]}>
          <Image source={{uri: gameItem.icon}} style={styles.gameIcon} />
          <View style={styles.gameInfoContent}>
            <Text style={[styles.textColor, styles.textTitle]}>
              {gameItem.title}
            </Text>
            <Text style={[styles.textColor, styles.textSub]}>
              {gameItem.subTitle}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameBanner: {
    height: 200,
    width: screenWith,
  },
  gameInfo: {
    position: 'absolute',
    bottom: -40,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  gameInfoContent: {
    width: '80%',
  },
  gameIcon: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  textColor: {color: '#fff'},
  textTitle: {fontSize: 20, fontWeight: '700'},
  textSub: {fontSize: 14, fontWeight: '300'},
});
