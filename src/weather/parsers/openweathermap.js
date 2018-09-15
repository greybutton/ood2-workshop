export default async (city, request) => {
  const api = 'http://api.openweathermap.org/data/2.5/';
  const key = '&APPID=af85ac894f9ddf863e28168893b4747f';
  const weather = `weather?q=${city}`;
  const url = `${api}${weather}${key}`;
  const response = await request(url);
  if (response.status === 200) {
    return response.data;
  }
  return 'error';
};
