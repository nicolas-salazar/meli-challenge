import axios from 'axios';
import { SEARCH_URL } from '../consts';

export const getSearchResults = async (query) => {
  const serverResponse = await axios.get(SEARCH_URL, {
    params: {
      q: query,
    },
  });

  const { data } = serverResponse;
  return data;
};
