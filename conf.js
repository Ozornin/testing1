exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specAddProduct.js'],
    framework: 'jasmine2',
    multiCapabilities: [{
      browserName: 'chrome'
    }]
}