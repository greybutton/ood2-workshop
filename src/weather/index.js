import '@babel/polyfill';
import axios from 'axios';

import parsers from './parsers';

const services = ['openweathermap', 'metaweather'];

export default class {
  constructor({ service, parser, request = axios }) {
    const isCustomService = !services.includes(service);
    this.service = service || 'metaweather';
    this.request = request;
    this.parse = isCustomService ? parser : parsers[this.service];
  }

  getWeather(city) {
    const result = this.parse(city, this.request);
    return result;
  }
}
