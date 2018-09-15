import axios from 'axios';

const request = async (url) => {
  const response = await axios.get(url);
  return response;
};

export default async (ip) => {
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
