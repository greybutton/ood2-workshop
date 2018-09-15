export default async (city, request) => {
  const api = 'https://www.metaweather.com/api/location/';
  const searchUrl = `${api}search/?query=${city}`;
  const { data: [{ woeid }] } = await request(searchUrl);
  const idUrl = `${api}${woeid}/`;
  const response = await request(idUrl);
  if (response.status === 200) {
    return response.data;
  }
  return 'error';
};
