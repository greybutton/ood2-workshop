[![Build Status][build-badge]][build]

[build-badge]: https://img.shields.io/travis/greybutton/ood2-workshop.svg?style=flat-square
[build]: https://travis-ci.org/greybutton/ood2-workshop

## IPGeobase description

### Install

CLI: `npm install -g ipgeobase-greybutton`

Module: `npm install --save ipgeobase-greybutton`

### Use

CLI: `ipgeobase-greybutton 127.0.0.1`

Module:

```js
import ipgeobase from "ipgeobase-greybutton";

ipgeobase('127.0.0.1');
```

## Weather description

Services support: metaweather(default), openweathermap

### Install

CLI: `npm install -g weather-greybutton`

Module: `npm install --save weather-greybutton`

### Use

CLI: `weather-greybutton --service openweathermap berlin`

Module:

```js
import Weather from "weather-greybutton";

const weather = new Weather(options);
const berlinWeather = weather.getDataByCity('berlin', 'openweathermap');
```

#### Configuration

```js

import Weather from "weather-greybutton";

class CustomService {
  constructor(request) {
    this.request = request;
  }

  static name = 'custom service';

  getData() {
    const response = this.request();
    return response.data;
  }
}

const options = {
  http: 'http library, default axios',
  service: [CustomService]
};

const weather = new Weather(options);
const berlinWeather = weather.getDataByCity('berlin', 'custom service');
```
