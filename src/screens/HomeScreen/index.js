import axios from 'axios';
import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, View} from 'react-native';
import GameItem from './GameItem';
import Header from './Header';
import {BackgroundView} from '../../components';

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
      <BackgroundView>
        <Header />
        {!!games.length && (
          <FlatList
            data={games}
            renderItem={this._renderItem}
            contentContainerStyle={styles.contentListGame}
            ItemSeparatorComponent={() => <View style={styles.ItemSeparator} />}
          />
        )}
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  ItemSeparator: {
    height: 100,
  },
  contentListGame: {
    paddingBottom: 100,
  },
});
