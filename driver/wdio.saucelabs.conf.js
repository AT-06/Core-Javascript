// Let's load the default configs:
let defaults = require("./wdio.conf.js").config;
let config = require('./config.json');
var _ = require("lodash");

var overrides = {
    services: ['sauce'],
    user: config.sauceUserName,
    key: config.sauceKEY,
    sauceConnect: true,
    Capabilities: [{
        browserName: config.browserName,
        platform: config.platform,
        version: config.version,
        screenResolution: '1024x768'

    }]
};

// Send the merged defaults to wdio
exports.config = _.defaultsDeep(overrides, defaults);
