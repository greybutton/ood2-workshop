import '@babel/polyfill';
import axios from 'axios';

import defaultServices from './services';

export default class {
  constructor(options = {}) {
    const {
      http,
      services,
    } = options;
    this.request = http || axios;
    const unionServices = services ? defaultServices.concat(services) : defaultServices;
    this.services = this.createServices(unionServices);
  }

  createServices(services) {
    const servicesObj = services
      .reduce((acc, service) => ({ ...acc, [service.name]: service }), {});
    const keys = Object.keys(servicesObj);
    const newServices = keys.reduce((acc, key) => {
      const Service = servicesObj[key];
      const service = new Service(this.request);
      return { ...acc, [key]: service };
    }, {});
    return newServices;
  }

  getDataByCity(city, serviceName = 'metaweather') {
    const service = this.getService(serviceName);
    const result = service.getData(city);
    return result;
  }

  getService(serviceName) {
    const service = this.services[serviceName];
    return service;
  }
}
