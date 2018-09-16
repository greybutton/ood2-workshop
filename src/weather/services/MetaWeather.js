export default class {
  constructor(request) {
    this.request = request;
  }

  getData(city) {
    const request = async () => {
      const api = 'https://www.metaweather.com/api/location/';
      const searchUrl = `${api}search/?query=${city}`;
      const { data: [{ woeid }] } = await this.request(searchUrl);
      const idUrl = `${api}${woeid}/`;
      const response = await this.request(idUrl);
      if (response.status === 200) {
        return response.data;
      }
      return 'error';
    };
    const result = request();
    return result;
  }
}
