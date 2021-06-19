import axios from 'axios';

export const fetchGameData = () => {
  return axios({method: 'GET', url: 'http://localhost:3000/games'});
};

export const fetchGameDetail = id =>
  axios({
    method: 'GET',
    url: `http://localhost:3000/games/${id}`,
  });
