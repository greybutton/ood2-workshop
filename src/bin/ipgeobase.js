#!/usr/bin/env node

import commander from 'commander';

import { version } from '../../package.json';
import IpGeobase from '../ipgeobase';

export default commander
  .version(version, '-V, --version')
  .description('Get information by IP.')
  .arguments('<IP>')
  .action((ip) => {
    const ipgeobase = new IpGeobase();
    ipgeobase.getDataIp(ip).then(res => console.log(res));
  })
  .parse(process.argv);
