import '@babel/polyfill';
import axios from 'axios';

import services from './services';

export default class {
  constructor(options = {}) {
    const {
      http,
      service,
    } = options;
    this.request = http || axios;
    this.services = service ? {
      ...services,
      [service.name]: service.klass,
    } : services;
  }

  getDataByCity(city, serviceName = 'metaweather') {
    const Service = this.getService(serviceName);
    const service = new Service(this.request);
    const result = service.getData(city);
    return result;
  }

  getService(serviceName) {
    const service = this.services[serviceName];
    return service;
  }
}
