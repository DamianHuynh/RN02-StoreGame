import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import GameItem from './GameItem';
import Header from './Header';
import {BackgroundView} from '../../components';
import {useSelector, useDispatch, connect} from 'react-redux';
import {fetchGameDataAction} from '../../redux/actions/gameAction';
import {getGamesState} from '../../redux/selectors/gameSelector';
import {changeLoading} from '../../redux/actions/loadingAction';
import withLoading from '../../HOC/withLoading';

const HomeScreen = props => {
  const games = useSelector(getGamesState);
  const dispatch = useDispatch();
  console.log(props);

  const _renderItem = ({item}) => <GameItem gameItem={item} />;

  useEffect(() => {
    dispatch(changeLoading(true));
    dispatch(fetchGameDataAction());
  }, []);

  if (props.isLoading) {
    return (
      <BackgroundView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, color: '#fff'}}>Loading ...</Text>
      </BackgroundView>
    );
  }

  return (
    <BackgroundView>
      <Header />
      {!!games.length && (
        <FlatList
          data={games}
          renderItem={_renderItem}
          contentContainerStyle={styles.contentListGame}
          ItemSeparatorComponent={() => <View style={styles.ItemSeparator} />}
        />
      )}
    </BackgroundView>
  );
};

const styles = StyleSheet.create({
  ItemSeparator: {
    height: 100,
  },
  contentListGame: {
    paddingBottom: 100,
  },
});

export default withLoading(HomeScreen);
