import * as APIPromise from './APIPromise';
export const testReduxAPI = async (data: any): Promise<any> => {
  console.log(data);
  const url = 'https://dummyjson.com/products';
  // const getUrl = url + uid + '/' + 'get-sd/' + dayName + '/' + String(date)
  const result = await APIPromise.axiosGet(url);
  return result;
};
