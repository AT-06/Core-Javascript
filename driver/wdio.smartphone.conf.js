// Mobile configs:
var defaults = require("./wdio.conf.js").config;
let config = require('./config.json');
var _ = require("lodash");

var overrides = {
    services: ['sauce'],
    user: config.sauceUserName,
    key: config.sauceKEY,
    sauceConnect: true,
    capabilities: [{
        appiumVersion: '1.8.0',
        deviceName: 'Samsung Galaxy S9 FHD GoogleAPI Emulator',
        deviceOrientation: 'portrait',
        browserName: 'Chrome',
        platformVersion: '7.1',
        platformName: 'Android'

    }, {
        appiumVersion: '1.8.0',
        deviceName: 'iPhone X Simulator',
        deviceOrientation: 'portrait',
        browserName: 'Safari',
        platformVersion: '11.2',
        platformName: 'iOS'
    }]
};

// Send the merged config to wdio
exports.config = _.defaultsDeep(overrides, defaults);