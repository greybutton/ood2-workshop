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
    this.services = services
      ? this.createServices(defaultServices.concat(services))
      : this.createServices(defaultServices);
  }

  createServices(services) {
    const mergeServices = services
      .reduce((acc, service) => ({ ...acc, [service.name]: service }), {});
    const keys = Object.keys(mergeServices);
    const newServices = keys.reduce((acc, key) => {
      const Service = mergeServices[key];
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
