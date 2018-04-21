exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specProducts.js'],
    framework: 'jasmine2',
    multiCapabilities: [{
      browserName: 'chrome'
    }]
}