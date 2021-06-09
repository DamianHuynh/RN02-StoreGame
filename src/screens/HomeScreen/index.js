import axios from 'axios';
import React, {Component} from 'react';
import {Dimensions, FlatList, Platform, StyleSheet, View} from 'react-native';
import GameItem from './GameItem';

const {width: screenWith} = Dimensions.get('window');

export default class HomeScreen extends Component {
  state = {
    games: [],
    gameItem: {},
  };

  _renderItem = ({item}) => <GameItem gameItem={item} />;

  componentDidMount() {
    console.log(Platform.OS);
    axios({method: 'GET', url: 'http://localhost:3000/games'})
      .then(res => {
        let games = res.data;
        if (Platform.OS === 'android') {
          games = res.data.map(item => {
            const preview = item.preview.map(pItem =>
              pItem.replace('localhost', '10.0.2.2'),
            );
            return {
              ...item,
              preview,
              icon: item.icon.replace('localhost', '10.0.2.2'),
            };
          });
        }
        // console.log(games);

        this.setState({games, gameItem: games[0]});
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.gameItem);
    const {games} = this.state;
    return (
      <View style={styles.container}>
        {!!games.length && (
          <FlatList
            data={games}
            renderItem={this._renderItem}
            contentContainerStyle={styles.contentListGame}
            ItemSeparatorComponent={() => <View style={styles.ItemSeparator} />}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  },
  gameBanner: {
    height: 200,
    width: screenWith,
  },
  ItemSeparator: {
    height: 100,
  },
  contentListGame: {
    paddingBottom: 100,
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
