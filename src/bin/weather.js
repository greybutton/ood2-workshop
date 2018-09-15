#!/usr/bin/env node

import commander from 'commander';

import { version } from '../../package.json';
import weather from '../weather';

export default commander
  .version(version, '-V, --version')
  .description('Get weather in the city.')
  .arguments('<City>')
  .option('-s, --service [name]', 'Weather service', 'metaweather')
  .action((city, options) => {
    weather(city, options).then(res => console.log(res));
  })
  .parse(process.argv);
