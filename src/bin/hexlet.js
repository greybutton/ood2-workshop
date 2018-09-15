#!/usr/bin/env node

import commander from 'commander';

import { version } from '../../package.json';
import app from '..';

export default commander
  .version(version, '-V, --version')
  .description('Get information by IP.')
  .arguments('<IP>')
  .action((ip) => {
    app(ip).then(res => console.log(res));
  })
  .parse(process.argv);
