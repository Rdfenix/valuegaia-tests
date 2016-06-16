exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/**/*.spec.js'],
  multiCapabilities: [{
    'browserName': 'chrome'
  }],
  params:{
    env: "production"
  },
  onPrepare: function(){
      var SpecReporter = require('jasmine-spec-reporter');
      jasmine.getEnv().addReporter(new SpecReporter(
        {
          displayStacktrace: 'specs',    // display stacktrace for each failed assertion, values: (all|specs|summary|none)
          displayFailuresSummary: true, // display summary of all failures after execution
          displayPendingSummary: true,  // display summary of all pending specs after execution
          displaySuccessfulSpec: true,  // display each successful spec
          displayFailedSpec: true,      // display each failed spec
          displayPendingSpec: true,    // display each pending spec
          displaySpecDuration: true,   // display each spec duration
          displaySuiteNumber: true,    // display each suite number (hierarchical)
          colors: {
            success: 'green',
            failure: 'red',
            pending: 'yellow'
          },
          prefixes: {
            success: '✓ ',
            failure: '✗ ',
            pending: '* '
          }
        }));
  },
  jasmineNodeOpts: {
    showColors: true,
    print: function() {}
  }
};
