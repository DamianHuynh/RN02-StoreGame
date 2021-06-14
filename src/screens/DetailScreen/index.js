import axios from 'axios';
import React, {Component} from 'react';
import {Platform, Image, StyleSheet, FlatList} from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {BackgroundView, Text, View} from '../../components';
import {mapIP} from '../../utils/common';

export default class DetailScreen extends Component {
  state = {
    game: {},
  };

  renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      const color =
        Math.floor(this.state.game.rating) >= i ? '#819ee5' : '#bbb';
      star.push(<IonicIcon key={i} name="ios-star" size={16} color={color} />);
    }
    return star;
  };

  _renderItem = ({item}) => {
    return <Image source={{uri: item}} style={styles.carouselItem} />;
  };

  componentDidMount() {
    axios({
      method: 'GET',
      url: `http://localhost:3000/games/${this.props.route.params.id}`,
    })
      .then(res => {
        let game = {};
        if (Platform.OS === 'android') {
          game = mapIP(res.data);
        } else {
          game = res.data;
        }
        this.setState({game});
      })
      .catch(err => console.log(err));
  }

  render() {
    const {game} = this.state;
    return (
      <BackgroundView>
        {!!game.title && (
          <>
            <Image source={{uri: game.preview[0]}} style={styles.gameBanner} />
            <View style={styles.gameContainer}>
              <View style={styles.infoGame}>
                <View style={styles.infoGameContainer} row>
                  <Image source={{uri: game.icon}} style={styles.iconGame} />
                  <View style={styles.infoGameText}>
                    <Text h2 light>
                      {game.title}
                    </Text>
                    <Text style={styles.infoSubTitleText}>{game.subTitle}</Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <IonicIcon name="cloud-download" color="#fff" size={30} />
                  </View>
                </View>
                <View row>
                  <View row style={styles.infoGameContainer}>
                    {this.renderStar()}
                    <Text>{game.rating}</Text>
                  </View>
                  <Text>{game.age}</Text>
                  <Text>Game of the days</Text>
                </View>
              </View>
              <View style={styles.carouselGame}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={game.preview}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={this._renderItem}
                  ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparatorComponent} />
                  )}
                  snapToInterval={370}
                  decelerationRate="fast"
                />
              </View>
            </View>
          </>
        )}
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  gameBanner: {
    flex: 1,
    width: '100%',
  },
  gameContainer: {
    flex: 2,
    paddingHorizontal: 20,
  },
  infoGame: {
    flex: 1,
  },
  infoGameContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconGame: {
    height: 80,
    width: 80,
    borderRadius: 16,
  },
  infoGameText: {
    width: '60%',
  },
  infoSubTitleText: {
    opacity: 0.5,
  },
  iconContainer: {
    backgroundColor: '#819ee5',
    height: 40,
    width: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselGame: {
    flex: 2,
  },
  carouselItem: {
    width: 350,
    height: 200,
  },
  itemSeparatorComponent: {
    width: 20,
  },
  descriptionGame: {
    flex: 1,
  },
});
