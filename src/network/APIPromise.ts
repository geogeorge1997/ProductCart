import axios from 'axios';

// istanbul ignore next
export const axiosGet = async (url: string): Promise<any> => {
  return await axios.get(url);
};
