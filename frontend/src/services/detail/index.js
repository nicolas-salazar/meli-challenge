import axios from 'axios';
import { DETAIL_URL } from '../consts';

export const getItemDetails = async (id) => {
  const serverResponse = await axios.get(DETAIL_URL.replace(':id', id), {
  });

  const { data } = serverResponse;
  return data;
};
