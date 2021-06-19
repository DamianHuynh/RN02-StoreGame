import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import GameItem from './GameItem';
import Header from './Header';
import {BackgroundView} from '../../components';
import {connect} from 'react-redux';
import {fetchGameDataAction, setGameData} from '../../redux/actions/gameAction';

class HomeScreen extends Component {
  _renderItem = ({item}) => <GameItem gameItem={item} />;

  componentDidMount() {
    this.props.fetchGameData();
  }

  render() {
    const {games} = this.props;
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

const mapDispatchToProps = dispatch => ({
  setGameData: data => dispatch(setGameData(data)),
  fetchGameData: () => dispatch(fetchGameDataAction()),
});

const mapStateToProps = state => {
  return {
    games: state.gameReducer.games,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
