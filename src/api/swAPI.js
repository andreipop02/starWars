import axios from 'axios';
import {BASE_URL} from '../constants/url';

export const fetchResults = async (resultType) => {
  
  return axios
    .get(resultType)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};


