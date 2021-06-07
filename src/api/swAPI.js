import axios from 'axios';

export const fetchResults = async resultType => {
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
