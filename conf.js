exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specAuth.js'],
    framework: 'jasmine2',
    multiCapabilities: [{
      browserName: 'chrome'
    }]
}