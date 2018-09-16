import '@babel/polyfill';
import axios from 'axios';

export default class {
  constructor(options = {}) {
    const { http } = options;
    this.request = http || axios;
  }

  getDataIp(ip, service = 'http://ip-api.com/json/') {
    const url = `${service}${ip}`;
    const request = async () => {
      const response = await this.request(url);

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
    const result = request();
    return result;
  }
}
