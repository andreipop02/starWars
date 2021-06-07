import {fetchResults} from './index';

export const getNames = (urlArray, setter) => {
    Promise.all(
      urlArray.map(index => {
        return fetchResults(index);
      }),
    ).then(values => setter(values));
  };