import {mapIP} from '../../utils/common';
import {
  FETCH_GAME_DATA_SUCCESS,
  FETCH_GAME_DETAIL_SUCCESS,
} from '../actions/gameAction';

const initialState = {
  arrayGames: [],
  gameDetail: {},
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME_DATA_SUCCESS:
      state.arrayGames = action.payload;
      return {...state};
    case FETCH_GAME_DETAIL_SUCCESS:
      state.gameDetail = action.payload;
      return {...state};
    default:
      return state;
  }
};

export default gameReducer;
