exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/**/*.spec.js'],
  multiCapabilities: [
    // {'browserName': 'phantomjs'}
    {'browserName': 'chrome'}
  ],
  params:{
    env: "production"
  }
};
