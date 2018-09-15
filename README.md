[![Build Status][build-badge]][build]

[build-badge]: https://img.shields.io/travis/greybutton/ood2-workshop.svg?style=flat-square
[build]: https://travis-ci.org/greybutton/ood2-workshop

## IPGeobase description

### Install

CLI: npm install -g ipgeobase-greybutton

Module: npm install --save ipgeobase-greybutton

### Use

CLI: ipgeobase-greybutton 127.0.0.1

Module:

```js
import ipgeobase from "ipgeobase-greybutton";

ipgeobase('127.0.0.1');
```

## Weather description

Services support: metaweather(default), openweathermap

### Install

CLI: npm install -g weather-greybutton

Module: npm install --save weather-greybutton

### Use

CLI: weather-greybutton --service openweathermap berlin

Module:

```js
import weather from "weather-greybutton";

weather('berlin', { services: 'openweathermap'});
```