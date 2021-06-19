import {fetchGameData, fetchGameDetail} from '../../api/gameAPI';

export const FETCH_GAME_DATA_SUCCESS = 'FETCH_GAME_DATA_SUCCESS';
export const FETCH_GAME_DATA_FAILED = 'FETCH_GAME_DATA_FAILED';

export const FETCH_GAME_DETAIL_SUCCESS = 'FETCH_GAME_DETAIL_SUCCESS';

export const fetchGameDataSuccess = payload => ({
  type: FETCH_GAME_DATA_SUCCESS,
  payload,
});

export const fetchGameDataFailed = () => ({type: FETCH_GAME_DATA_FAILED});

export const fetchGameDetailSuccess = payload => ({
  type: FETCH_GAME_DETAIL_SUCCESS,
  payload,
});

export const fetchGameDataAction = () => {
  return dispatch => {
    fetchGameData()
      .then(res => dispatch(fetchGameDataSuccess(res.data)))
      .catch(() => dispatch(fetchGameDataFailed()));
  };
};

export const fetchGameDetailAction = id => {
  return dispatch => {
    fetchGameDetail(id)
      .then(res => dispatch(fetchGameDetailSuccess(res.data)))
      .catch(err => console.log(err));
  };
};
