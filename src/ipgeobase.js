import '@babel/polyfill';
import axios from 'axios';

const defaultRequest = async (api, ip) => {
  const response = await axios.get(`${api}${ip}`);

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

export default (ip, request = defaultRequest) => {
  const api = 'http://ip-api.com/json/';

  const result = request(api, ip);
  return result;
};
