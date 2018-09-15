import '@babel/polyfill';
import axios from 'axios';

export default async (ip, request = axios) => {
  const api = 'http://ip-api.com/json/';
  const url = `${api}${ip}`;

  const response = await request(url);

  if (response.status === 200) {
    const {
      data: {
        country,
        region,
        city,
        lat,
        lon,
      },
    } = response;

    const result = {
      country,
      region,
      city,
      lat,
      lon,
    };
    return result;
  }
  return 'error';
};
