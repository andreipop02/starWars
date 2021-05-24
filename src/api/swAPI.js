import axios from 'axios';
import {BASE_URL} from '../constants/url';

export const fetchAllFilms = async () => {
  console.log(`${BASE_URL}/films/`)
  return axios
    .get(`${BASE_URL}/films/`)
    .then(response => {
      console.log(response);
      return response.data.results;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};
