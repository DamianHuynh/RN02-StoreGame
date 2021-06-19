import {mapIP} from '../../utils/common';
import {
  FETCH_GAME_DATA_SUCCESS,
  FETCH_GAME_DETAIL_SUCCESS,
} from '../actions/gameAction';

const initialState = {
  games: [],
  gameDetail: {},
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME_DATA_SUCCESS:
      state.games = mapIP(action.payload);
      return {...state};
    case FETCH_GAME_DETAIL_SUCCESS:
      state.gameDetail = mapIP(action.payload);
      return {...state};
    default:
      return state;
  }
};

export default gameReducer;
