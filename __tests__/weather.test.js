import weather from '../src/weather';

describe('weather', () => {
  test('metaweather', async () => {
    const response = () => ({
      status: 200,
      data: {
        timezone_name: 'LMT',
        parent:
        {
          title: 'Germany',
          location_type: 'Country',
          woeid: 23424829,
          latt_long: '51.164181,10.454150',
        },
        title: 'Berlin',
        location_type: 'City',
        woeid: 638242,
        latt_long: '52.516071,13.376980',
        timezone: 'Europe/Berlin',
      },
    });
    const city = 'berlin';
    const options = { service: 'openweathermap' };
    const result = await weather(city, options, response);
    const received = result.title;
    const expected = 'Berlin';
    expect(received).toBe(expected);
  });

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
    const city = 'berlin';
    const options = { service: 'openweathermap' };
    const result = await weather(city, options, response);
    const received = result.name;
    const expected = 'Berlin';
    expect(received).toBe(expected);
  });
});
