import axios from 'axios';
import {BASE_URL, gameSubfix} from './api.constant';

export const fetchGameData = () => {
  return axios({method: 'GET', url: `${BASE_URL}/${gameSubfix}`});
};

export const fetchGameDetail = id =>
  axios({
    method: 'GET',
    url: `${BASE_URL}/${gameSubfix}/${id}`,
  });
