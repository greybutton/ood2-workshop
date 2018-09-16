import Weather from '../src/weather';

describe('weather', () => {
  test('openweathermap', async () => {
    const response = () => ({
      status: 200,
      data: {
        coord: { lon: 13.39, lat: 52.52 },
        sys:
        {
          type: 1,
          id: 4892,
          message: 0.0372,
          country: 'DE',
          sunrise: 1536986500,
          sunset: 1537032005,
        },
        id: 2950159,
        name: 'Berlin',
        cod: 200,
      },
    });
    const weather = new Weather({
      service: 'openweathermap',
      request: response,
    });
    const city = 'berlin';
    const result = await weather.getWeather(city);
    const received = result.name;
    const expected = 'Berlin';
    expect(received).toBe(expected);
  });

  test('custom service', async () => {
    const parser = async (city, request) => {
      const response = request();
      return response.data;
    };
    const response = () => ({ data: { name: 'Berlin' } });
    const weather = new Weather({
      service: 'custom service',
      parser,
      request: response,
    });
    const result = await weather.getWeather('berlin');
    const received = result.name;
    const expected = 'Berlin';
    expect(received).toBe(expected);
  });
});
