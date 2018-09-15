import axios from 'axios';

const request = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
};

export default async (ip) => {
  const api = 'http://ip-api.com/json/';
  const url = `${api}${ip}`;

  const {
    country, region, city, lat, lon,
  } = await request(url);

  const result = {
    country,
    region,
    city,
    lat,
    lon,
  };

  return result;
};
