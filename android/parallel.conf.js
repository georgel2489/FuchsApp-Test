exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'cojocarigheorghe1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'sexQdqETHqXjfqf6AfKq',

  updateJob: false,
  specs: [
    './specs/multiple.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    project: "Fuchs",
    build: 'Fuchs',
    name: '85.3',
    app: process.env.BROWSERSTACK_APP_ID || 'bs://569e16fb3bfd106bb2b501bb13ca24ff85da8bc3',
    'browserstack.debug': true
  },

  capabilities: [
    {
      device: 'Samsung Galaxy S21',
      os_version: "11.0"
    },
    // {
    //   device: 'Samsung Galaxy S20 Ultra',
    //   os_version: "10.0"
    // },
    // {
    //   device: 'Samsung Galaxy S10e',
    //   os_version: "9.0"
    // }
  ],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
