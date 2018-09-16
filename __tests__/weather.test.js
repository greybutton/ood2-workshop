import Weather from '../src/weather';

describe('weather', () => {
  test('openweathermap', async () => {
    const http = () => ({
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
      http,
    });

    const city = 'berlin';
    const serviceName = 'openweathermap';
    const result = await weather.getDataByCity(city, serviceName);
    const received = result.name;
    const expected = 'Berlin';
    expect(received).toBe(expected);
  });

  test('custom service', async () => {
    class CustomService {
      constructor(request) {
        this.request = request;
      }

      getData() {
        const response = this.request();
        return response.data;
      }
    }

    const http = () => ({ data: { name: 'Berlin' } });

    const weather = new Weather({
      http,
      service: {
        name: 'custom service',
        klass: CustomService,
      },
    });

    const result = await weather.getDataByCity('berlin', 'custom service');
    const received = result.name;
    const expected = 'Berlin';
    expect(received).toBe(expected);
  });
});
