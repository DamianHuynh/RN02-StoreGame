import {mapIP} from '../../utils/common';

export const getGamesState = state => {
  const result = mapIP(state.gameReducer.arrayGames);
  return result;
};

export const getGameDetailState = state => mapIP(state.gameReducer.gameDetail);
