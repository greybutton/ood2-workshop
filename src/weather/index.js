import '@babel/polyfill';
import axios from 'axios';

import parsers from './parsers';

export default (city, options, request = axios) => {
  const parse = parsers[options.service];
  const result = parse(city, request);
  return result;
};
